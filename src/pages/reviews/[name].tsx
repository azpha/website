import {useRouter} from 'next/router';
import {useState, useEffect} from 'react'
import {api} from '@/utils/api'
import { useSession } from 'next-auth/react';

export default function ReviewPage() {
    const router = useRouter()
    const name = router.query.name as string
    const {data: bookData} = api.post.getOne.useQuery(name)
    const [view,setView] = useState(null)

    return (
        <>
            <p>Post: {router.query.name}</p>
        </>
    )
}