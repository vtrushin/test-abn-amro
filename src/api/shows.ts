export type ShowRating = {
	average: number | null
}

export type ShowImage = {
	medium: string
	original: string
}

export type Show = {
	id: number
	name: string
	image: ShowImage | null
	rating: ShowRating
	genres: string[]
	summary: string
}

export const requestShows = (): Promise<Show[]> =>
	fetch('https://api.tvmaze.com/shows?page=0').then(res => res.json())

export const requestSearchShows = ({ query }: { query: string }): Promise<{ show: Show }[]> =>
	fetch(`https://api.tvmaze.com/search/shows?q=${query}`).then(res => res.json())

export const requestShow = ({ showId }: { showId: number }): Promise<Show> =>
	fetch(`https://api.tvmaze.com/shows/${showId}`).then(res => res.json())

