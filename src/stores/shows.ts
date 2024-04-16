import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { requestShows, type Show } from '@/api/shows'
import { getRequestError } from '@/helpers/request-error'

export const useShowsStore = defineStore('shows', () => {
	const shows = ref<Show[]>([])
	const error = ref<string | null>(null)
	const isLoading = ref(false)

	const loadShows = async () => {
		isLoading.value = true
		error.value = null

		try {
			shows.value = await requestShows()
		} catch (e) {
			error.value = getRequestError(e)
		} finally {
			isLoading.value = false
		}
	}

	const genres = computed(() =>
		new Set(shows.value.flatMap(show => show.genres))
	)

	return {
		shows,
		genres,
		isLoading,
		error,
		loadShows
	}
})
