<script setup lang="ts">
defineProps<{
	src?: string
	name: string
	rating: string
}>()
</script>

<template>
	<div class="show">
		<img v-if="!!src" class="show-img" :src="src" :alt="name" />
		<div class="show-name">{{name}}</div>
		<div v-if="!!rating" class="show-rating">★ {{rating}}</div>
	</div>
</template>

<style scoped>
a:global(:link) .show * {
	text-decoration: inherit;
	color: inherit;
}
.show {
	width: 210px;
}
@media (width <= 800px) {
	.show {
		width: 100px;
	}
}

.show-img {
	width: 210px;
	height: 295px;
}
@media (width <= 800px) {
	.show-img {
		width: 100px;
		height: 140px;
	}
}
</style>


