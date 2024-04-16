<script setup lang="ts">
defineProps<{
	src?: string
	name: string
	rating: string
}>()
</script>

<template>
	<div class="show">
		<img class="show-img" :src="src" :alt="name" />
		<div class="show-name">{{name}}</div>
		<div class="show-rating">★ {{rating}}</div>
	</div>
</template>

<style scoped>
a:global(:link) .show * {
	text-decoration: inherit;
	color: inherit;
}

@media (width <= 800px) {
	.show-img {
		max-width: 100px;
	}
}
</style>


