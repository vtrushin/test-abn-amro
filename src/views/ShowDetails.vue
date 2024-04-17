<script setup lang="ts">
	import { useRoute } from 'vue-router'
	import ShowBlock from '@/components/ShowBlock.vue'
	import { useShowQuery } from '@/api/queries'

	const route = useRoute()
	const showId = Number(route.params.id)

	const { isPending, data: show, error } = useShowQuery({ showId })
</script>

<template>
	<div v-if="isPending">Loading...</div>
	<div v-else-if="show">
		<RouterLink to="/">← Home</RouterLink>
		<h1 v-text="show.name" />
		<div class="show-body">
			<div>
				<ShowBlock
					:src="show.image?.medium"
					:name="show.name"
					:rating="show.rating.average"
				/>
			</div>
			<div class="show-summary" v-html="show.summary" />
		</div>
	</div>
	<div v-else-if="error">{{error}}</div>
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
