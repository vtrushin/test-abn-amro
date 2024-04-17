import type { Ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { requestSearchShows, requestShow, requestShows } from '@/api/shows'

export const useShowsQuery = ({ query }: { query: Ref<string> }) => {
	return useQuery({
		queryKey: ['shows', query],
		queryFn: () => query.value !== ''
			? requestSearchShows({ query: query.value })
				.then(data => data.map(showWrapper => showWrapper.show))
			: requestShows()
	})
}

export const useShowQuery = ({ showId }: { showId: number }) => {
	return useQuery({
		queryKey: ['show', showId],
		queryFn: () => requestShow({ showId })
	})
}
