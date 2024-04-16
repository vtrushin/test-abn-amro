<script setup lang="ts">
import { onMounted } from 'vue'
import { useShowsStore } from '@/stores/shows'
import ShowGroup from '@/components/ShowGroup.vue'

const showsStore = useShowsStore()

onMounted(() => {
	showsStore.loadShows()
})
</script>

<template>
	<div v-if="showsStore.isLoading">Loading...</div>
	<div v-else-if="showsStore.shows" class="showcase">
		<ShowGroup
			v-for="genre in showsStore.genres"
			:key="genre"
			:title="genre"
			:shows="Array.from(showsStore.shows)
				.sort((a, b) => b.rating.average - a.rating.average)
				.filter(show => show.genres.includes(genre))"
			:loading="showsStore.isLoading"
		/>
	</div>
	<div v-else-if="showsStore.error">{{showsStore.error}}</div>
</template>

<style scoped>
.showcase {
	display: grid;
	gap: 20px
}
@media (width <= 800px) {
	.showcase {
		gap: 10px
	}
}
</style>
