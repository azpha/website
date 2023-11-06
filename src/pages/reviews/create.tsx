import {useSession} from 'next-auth/react';
import {useState, useEffect} from 'react';
import type {FormEvent} from 'react';
import Header from '@/components/header';
import Footer from "@/components/footer";
import Router from 'next/router';
import { api } from "@/utils/api";

export default function Page() {
    const { data: session, status } = useSession()
    const postMutation = api.post.create.useMutation()
    const linksMutation = api.links.create.useMutation()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (status == "unauthenticated") {
            console.log('user is unauthenticated!')
            Router.replace('/').catch(() => {
                console.error("Failed to reroute user!")
            })
        } else {
            setLoading(false)
        }
    }, [status])

    function sanitizeTitleForLink(title: string) {
        return title.replaceAll(" ", "-").toLowerCase()
    }

    function onPostSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.target as HTMLFormElement

        const titleElement = form.elements.namedItem('title') as HTMLInputElement;
        const reviewElement = form.elements.namedItem('review') as HTMLInputElement;
        const imageElement = form.elements.namedItem('image') as HTMLInputElement;
        const typeElement = form.elements.namedItem('type') as HTMLInputElement;

        const object = {
            name: sanitizeTitleForLink(titleElement.value),
            reviewContents: reviewElement.value,
            image: imageElement.value,
            type: typeElement.value
        }

        postMutation.mutate(object)
    }

    function onLinkSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.target as HTMLFormElement

        const titleElement = form.elements.namedItem('title') as HTMLInputElement;
        const urlElement = form.elements.namedItem('url') as HTMLInputElement;

        const object = {
            name: sanitizeTitleForLink(titleElement.value),
            url: urlElement.value
        }

        linksMutation.mutate(object)
    }

    if (!loading) {
        return (
            <main className="min-h-screen bg-black color-white">
                <div className="w-1/2 mx-auto text-white">
                    <Header />
                    <form onSubmit={onPostSubmit} className="text-black">
                        <div className="bg-gray-500 text-center">
                            <label className="font-bold">Title</label><br />
                            <input name="title" type="text" /><br />

                            <label className="font-bold">Image URL</label><br />
                            <input name="image" type="text" /><br />
                            
                            <label className="font-bold">Content Type (book, movie, tv, game)</label><br />
                            <input name="type" type="text" /><br />

                            <label className="font-bold">Review</label><br />
                            <textarea name="review" /><br />

                            <button type="submit">submit</button>
                        </div>
                    </form>

                    <form onSubmit={onLinkSubmit} className="text-black">
                        <div className="bg-gray-500 text-center">
                            <label className="font-bold">Title</label><br />
                            <input name="title" type="text" /><br />

                            <label className="font-bold">URL</label><br />
                            <input name="url" type="text" /><br />

                            <button type="submit">submit</button>
                        </div>
                    </form>
                    <Footer />
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