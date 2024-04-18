import {z} from 'zod';
import axios from 'axios';

import {
    createTRPCRouter,
    publicProcedure
} from '@/server/api/trpc';
import type {
    MedalApiObject,
    MusicApiObject,
    SteamApiObject
} from '@/utils/types'

const base_url = "https://api.thatalex.dev/v4/social/"
export const socialRouter = createTRPCRouter({
    getMedalData: publicProcedure
        .query(async ({input}) => {
            const response = await axios.get(base_url + "medal")
            return response.data as MedalApiObject
        }),
    getSteamData: publicProcedure
        .query(async ({input}) => {
            const response = await axios.get(base_url + "steam")
            return response.data as SteamApiObject
        }),
    getMusicData: publicProcedure
        .query(async ({input}) => {
            const response = await axios.get(base_url + "music")
            return response.data as MusicApiObject
        })
})