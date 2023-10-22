import {useSession, getSession} from 'next-auth/react';
import {useState, useEffect, FormEvent} from 'react';
import Header from '@/components/header';
import Router from 'next/router';
import { api } from "@/utils/api";

export default function Page() {
    const { data: session, status } = useSession()
    const mutation = api.post.create.useMutation()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (status == "unauthenticated") {
            console.log('user is unauthenticated!')
            Router.replace('/')
        } else {
            setLoading(false)
        }
    }, [status])

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const object = {
            name: event.target.title.value,
            reviewContents: event.target.review.value,
            image: event.target.image.value,
            type: event.target.type.value
        }

        mutation.mutate(object)
    }

    if (!loading) {
        return (
            <main className="min-h-screen bg-black color-white">
                <div className="w-1/2 mx-auto text-white">
                    <Header />
                    <form onSubmit={onSubmit} className="text-black">
                        <div className="bg-gray-500 text-center">
                            <label className="font-bold">Title</label><br />
                            <input name="title" type="text" /><br />

                            <label className="font-bold">Image URL</label><br />
                            <input name="image" type="text" /><br />
                            
                            <label className="font-bold">Content Type (book, movie, tv, game)</label><br />
                            <input name="type" type="text" /><br />

                            <label className="font-bold">Review</label><br />
                            <textarea name="review" />

                            <button type="submit">submit</button>
                        </div>
                    </form>
                </div>
            </main>
        )
    } else {
        return (
            <main>
                <p>
                    Loading..
                </p>
            </main>
        )
    }
}