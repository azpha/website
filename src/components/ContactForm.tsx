import { useState, useEffect } from 'react';
import InputBox from './InputBox';

export default function ContactForm() {
    const [ error, setError ] = useState<string>("");
    const [ success, setSuccess ] = useState<boolean>(false);
    const [ inputState, setInputState ] = useState<{name: string, email: string, subject: string, message: string}>({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const onSubmit = () => {
        if (
            inputState.name === ""
            || inputState.email === ""
            || inputState.subject === ""
            || inputState.message === ""
        ) {
            setError("A required field was missing")
        } else {
            console.log("Form submitted")

            fetch(import.meta.env.VITE_API_BASE_URL + "/contact", {
                method: "post",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(inputState)
            }).then((res) => {
                if (res.ok) {
                    setSuccess(true)
                } else {
                    if (res.status === 429) {
                        setError("Too many tries! Try again later")
                    } else {
                        setError("An error occurred while submitting your info.")
                    }
                }
            }).catch((e) => {
                console.error(e)
                setError("An error occurred while submitting your info.")
            })
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

            <div className="space-y-2 text-center">
                <InputBox 
                    isText={true}
                    name="name"
                    placeholder="Your name.."
                    onChange={(value: string) => {
                        setInputState((prevState) => {
                            return {
                                ...prevState,
                                name: value
                            }
                        })
                    }}
                />
                <InputBox 
                    name="email"
                    isText={true}
                    placeholder="your@supercool.email"
                    onChange={(value: string) => {
                        setInputState((prevState) => {
                            return {
                                ...prevState,
                                email: value
                            }
                        })
                    }}
                />
                <InputBox 
                    isText={true}
                    name="subject"
                    placeholder="Subject.."
                    onChange={(value: string) => {
                        setInputState((prevState) => {
                            return {
                                ...prevState,
                                subject: value
                            }
                        })
                    }}
                />
                <InputBox 
                    isText={false}
                    name="message"
                    placeholder="Your message here.."
                    onChange={(value: string) => {
                        setInputState((prevState) => {
                            return {
                                ...prevState,
                                message: value
                            }
                        })
                    }}
                />
            </div>

            <div className="block text-center">
                <button
                    type="button"
                    className="bg-white w-full text-black font-bold rounded-lg max-w-fit p-2"
                    onClick={onSubmit}
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
        </div>
    )
}