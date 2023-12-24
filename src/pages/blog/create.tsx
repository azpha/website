// trpc api
import { api } from "@/utils/api";
import {useState, useRef} from 'react';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// components
import RootLayout from '@/components/RootLayout';

// types
import type { FormEvent } from "react";

export default function BlogCreatePage() {
    const [textContent, setTextContent] = useState<string | null>(null)
    const [showMarkdown, setShowMarkdown] = useState<boolean>(false)

    // element refs
    const titleRef = useRef<HTMLInputElement>(null)
    const tagRef = useRef<HTMLInputElement>(null)
    const imageRef = useRef<HTMLInputElement>(null)

    // trpc mutation
    const blogPostMutation = api.blog.create.useMutation() 

    function handleElementUpdate(e: FormEvent) {
        const textarea = e.target as HTMLTextAreaElement
        setTextContent(textarea.value)
    }

    function submitBlogPost() {
        if (!textContent || textContent == "") {
            console.error("No text provided")
            return;
        }

        if (!titleRef || !tagRef || !titleRef.current?.value || !tagRef.current?.value || titleRef.current?.value == "" || tagRef.current?.value == "") {
            console.error("No title/tagline provided")
            return;
        }

        if (!imageRef?.current?.value || imageRef.current?.value == "") {
            console.error("No image URL provided")
            return
        }

        const data = {
            name: titleRef.current?.value,
            tagline: tagRef.current?.value,
            image: imageRef.current?.value,
            contents: textContent,
        }

        blogPostMutation.mutate(data)
    }

    return (
        <RootLayout protectedPage={true}>
            <div className="text-center pb-2">
                <button className="text-white mx-auto" onClick={() => setShowMarkdown(!showMarkdown)}>Show {showMarkdown ? "Text" : "Markdown"}</button>
            </div>

            {
                showMarkdown ? <Markdown remarkPlugins={[remarkGfm]} className="text-white w-1/2 mx-auto">
                    {textContent}
                </Markdown>
                : <textarea onInput={handleElementUpdate} className="resize-none block h-96 w-1/2 mx-auto bg-gray-900 rounded-sm text-white" defaultValue={textContent ?? ""} />
            }

            <div className="text-center pt-4 space-y-2">
                <input type="text" ref={titleRef} placeholder="title" name="title" /><br />
                <input type="text" ref={imageRef} placeholder="image url" name="image" /><br />
                <input type="text" ref={tagRef} placeholder="tagline" name="tag" /><br />

                <button onClick={submitBlogPost} className="text-white">Submit</button>
            </div>
        </RootLayout>
    )
}