// music type
type MusicData = {
    artist: {
        mbid: string,
        "#text": string
    },
    mbid: string,
    album: {
        mbid: string,
        "#text": string,
    },
    name: string,
    url: string,
    image: MusicImage[]
}
type MusicImage = {
    size: string,
    "#text": string
}

// tracker type
type ContentTrackerItem = {
    id: number,
    title: string,
    author?: string,
    description: string,
    episode?: string,
    image: string,
    type: "tv" | "book" | "game",
    tmdbId?: string,
    yearReleased: number,
    updatedAt: Date,
    genre: string,
    startedOn: Date,
    finished: boolean
}

export type {
    MusicData,
    ContentTrackerItem
}