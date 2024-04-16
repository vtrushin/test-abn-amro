<script setup lang="ts">
	import { onMounted } from 'vue'
	import { useShowStore } from '@/stores/show.js'
	import { useRoute } from 'vue-router'
	import ShowBlock from '@/components/ShowBlock.vue'

	const route = useRoute()
	const showId = Number(route.params.id)

	const showStore = useShowStore()

	onMounted(() => {
		showStore.loadShow(showId)
	})
</script>

<template>
	<div v-if="showStore.isLoading">Loading...</div>
	<div v-else-if="showStore.show">
		<RouterLink to="/">← Home</RouterLink>
		<h1 v-text="showStore.show.name" />
		<div class="show-body">
			<div>
				<ShowBlock
					:src="showStore.show.image.medium"
					:name="showStore.show.name"
					:rating="showStore.show.rating.average"
				/>
			</div>
			<div class="show-summary" v-html="showStore.show.summary" />
		</div>
	</div>
	<div v-else-if="showStore.error">{{showStore.error}}</div>
</template>

<style scoped>
.show-body {
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 50px
}
@media (width <= 800px) {
	.show-body {
		gap: 20px
	}
}
.show-summary {
	max-width: 80ch;
}
</style>
