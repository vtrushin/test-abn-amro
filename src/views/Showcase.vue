<script setup lang="ts">
import { computed, ref } from 'vue'
import ShowGroup from '@/components/ShowGroup.vue'
import ShowSearch from '@/components/ShowSearch.vue'
import { useShowsQuery } from '@/api/queries'

const query = ref('')

const { isPending, data: shows, error } = useShowsQuery({
	query
})

const genres = computed(() =>
	new Set((shows.value ?? []).flatMap(show => show.genres))
)

const onSearchChange = (val: string) => {
	query.value = val
}
</script>

<template>
	<div class="search-wrapper">
		<ShowSearch @change="onSearchChange" />
	</div>
	<div v-if="isPending">Loading...</div>
	<div v-else-if="shows" class="showcase">
		<ShowGroup
			v-for="genre in genres"
			:key="genre"
			:title="genre"
			:shows="Array.from(shows)
				.sort((a, b) => (b.rating.average ?? 0) - (a.rating.average ?? 0))
				.filter(show => show.genres.includes(genre))"
		/>
	</div>
	<div v-else-if="error">{{error}}</div>
</template>

<style scoped>
.search-wrapper {
	text-align: center;
	margin-bottom: 20px;
}
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
