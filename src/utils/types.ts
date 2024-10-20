type MusicAPIResponse = {
    data: {
        tracks: MusicData[]
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

export type {
    MusicAPIResponse,
    MusicData
}