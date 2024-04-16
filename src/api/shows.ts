export type ShowRating = {
	average: number
}

export type ShowImage = {
	medium: string
	original: string
}

export type Show = {
	id: number
	name: string
	image: ShowImage
	rating: ShowRating
	genres: string[]
	summary: string
}

export const requestShows = (): Promise<Show[]> =>
	fetch('https://api.tvmaze.com/shows?page=1').then(res => res.json())

export const requestShow = (showId: number): Promise<Show> =>
	fetch(`https://api.tvmaze.com/shows/${showId}`).then(res => res.json())

export const requestSearchShows = ({ search }: { search: string }): Promise<Show[]> => {
	return fetch(`https://api.tvmaze.com/search/shows?q=${search}`).then(res => res.json())
}

