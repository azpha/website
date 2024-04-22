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
    data: {
        tracks: LastTrackType[]
    }
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
        const response = await axios.get<TrackResponseType>("https://api.thatalex.dev/v4/social/music")
        return response.data
    }),
})