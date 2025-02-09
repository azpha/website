type WatchData = {
    data: {
        id: number,
        title: string,
        description: string,
        author?: string,
        image: string,
        episode?: string,
        tmdbId?: string,
        finished: boolean,
        startedOn?: Date,
        createdAt: Date,
        updatedAt: Date,
        createdById: string 
    }
}
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
type GameData = {
    name: string,
    location: string,
    startedOn: number,
    finished: boolean
}
type MedalClip = {
    contentId: string,
    contentTitle: string,
    contentViews: number,
    contentLikes: number,
    contentThumbnail: string,
    directClipUrl: string
}
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
    WatchData,
    MusicData,
    GameData,
    MedalClip,
    ContentTrackerItem
}