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
        <div className="bg-white rounded-lg text-black p-2">
            <h1 className="text-2xl font-bold">Contact Me</h1>
            <hr className="my-2 border-black" />

            <div className="space-y-2">
                <InputBox 
                    isText={true}
                    name="name"
                    placeholder="Name.."
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
                    placeholder="Email.."
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
                    placeholder="Message.."
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

            <div className="block">
                <button
                    type="button"
                    className="bg-black w-full text-white font-bold rounded-lg p-2"
                    onClick={onSubmit}
                >
                    Submit
                </button>
                <p className="text-red-400 font-bold text-center">{error}</p>
                <p className="font-bold text-center">{ success && "Success! Your message has been received"}</p>
            </div>
        </div>
    )
}