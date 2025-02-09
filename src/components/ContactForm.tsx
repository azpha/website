'use client';

import { useState, useEffect } from 'react';
import InputBox from './InputBox';
import { submitContact } from '@/actions/contact';

export default function ContactForm() {
    const [ error, setError ] = useState<string>("");
    const [ success, setSuccess ] = useState<boolean>(false);
    const [ pending, setPending ] = useState<boolean>(false);

    const handleSubmission = async (formData: FormData) => {
        setPending(true)

        try {
            const result = await submitContact(formData)
            
            if (result.error || !result.success) {
                setError('An unexpected error occurred')
            } else setSuccess(true)

            const form = document.getElementById('contact-form') as HTMLFormElement
            form.reset()
        } catch (e) {
            console.error(e)
            setError('An unexpected error occurred')
        } finally {
            setPending(false)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setError("")
        }, 6000)
    }, [error]);
    useEffect(() => {
        setTimeout(() => {
            setSuccess(false)
        }, 6000)
    }, [success]);

    return (
        <div className="rounded-lg p-2 w-full md:w-[50%] mx-auto">
            <h1 className="text-2xl font-bold text-center pb-8">Contact Me</h1>

            <form id="contact-form" action={handleSubmission} className="space-y-2 text-center">
                <InputBox 
                    isText={true}
                    name="name"
                    placeholder="Your name.."
                    disabled={pending}
                />
                <InputBox 
                    name="email"
                    type="email"
                    isText={true}
                    placeholder="your@supercool.email"
                    disabled={pending}
                />
                <InputBox 
                    isText={true}
                    name="subject"
                    placeholder="Subject.."
                    disabled={pending}
                />
                <InputBox 
                    isText={false}
                    name="message"
                    placeholder="Your message here.."
                    disabled={pending}
                />

                <div className="block text-center">
                    <button
                        type="submit"
                        className="bg-white w-full text-black font-bold rounded-lg max-w-fit p-2"
                    >
                        Submit
                    </button>
                    
                    {
                        error && (
                            <p className="text-red-400 font-bold text-center pt-2">{error}</p>
                        )
                    }

                    {
                        success && (
                            <p className="font-bold text-green-500 text-center pt-2">Success! Your message has been received</p>
                        )
                    }
                </div>
            </form>
        </div>
    )
}