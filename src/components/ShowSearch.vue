<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'

const emit = defineEmits(['change'])

const debouncedFn = useDebounceFn((e: Event) => {
	emit('change', (e.target as HTMLInputElement).value)
}, 500)
</script>

<template>
	<input
		type="search"
		class="search-input"
		placeholder="Search"
		@input="debouncedFn"
	/>
</template>

<style scoped>
.search-input {
	width: 100%;
	max-width: 800px;
	font-size: 30px;
}
@media (width <= 800px) {
	.search-input {
		font-size: 20px;
	}
}
</style>
