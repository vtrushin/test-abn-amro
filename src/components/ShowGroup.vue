<script setup lang="ts">
import type { Show } from '@/api/shows'
import ShowBlock from '@/components/ShowBlock.vue'

defineProps<{
	title: string
	shows: Show[]
}>()
</script>

<template>
	<div v-if="shows.length" class="show-group">
		<div class="show-group-title">{{ title }}</div>
		<div class="shows">
			<RouterLink
				v-for="show in shows"
				:to="`/show/${show.id}`"
			>
				<ShowBlock
					:src="show.image?.medium"
					:name="show.name"
					:rating="show.rating.average"
				/>
			</RouterLink>
		</div>
	</div>
</template>

<style scoped>
.show-group {
	display: grid;
	grid-auto-flow: row;
	gap: 10px;
}

.show-group-title {
	font-size: 30px;
	font-weight: bold;
}
@media (width <= 800px) {
	.show-group-title {
		font-size: 20px;
	}
}

.shows {
	display: grid;
	gap: 20px;
	grid-auto-flow: column;
	justify-content: start;
	overflow: auto;
}
@media (width <= 800px) {
	.shows {
		gap: 10px;
	}
}
</style>
