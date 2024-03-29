import axios from 'axios';

import {
    createTRPCRouter,
    publicProcedure
} from '@/server/api/trpc';

type ImageListType = {
    "size": string,
    "#text": string
}

type TrackResponseType = {
    status: number,
    track: LastTrackType[]
}

type LastTrackType = {
    "@attr": {
        "nowplaying": string
    },
    "album": {
        "mbid": string,
        "#text": string
    },
    "artist": {
        "mbid": string,
        "#text": string,
    },
    "image": ImageListType[],
    "mbid": string,
    "name": string,
    "streamable": number,
    "url": string
}

export const miscRouter = createTRPCRouter({
    song: publicProcedure
    .query(async () => {
        const response = await axios.get<TrackResponseType>("https://api.thatalex.dev/v3/music/last-track")
        return response.data
    }),
})