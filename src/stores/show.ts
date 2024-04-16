import { defineStore } from 'pinia'
import { ref } from 'vue'
import { requestShow, type Show } from '@/api/shows'
import { getRequestError } from '@/helpers/request-error'

export const useShowStore = defineStore('show', () => {
	const show = ref<Show | null>(null)
	const error = ref<string | null>(null)
	const isLoading = ref(false)

	const loadShow = async (showId: number) => {
		isLoading.value = true
		error.value = null

		try {
			show.value = await requestShow(showId)
		} catch (e) {
			error.value = getRequestError(e)
		} finally {
			isLoading.value = false
		}
	}

	return {
		show,
		isLoading,
		error,
		loadShow
	}
})
