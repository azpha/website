import RootLayout from "@/components/RootLayout";
import MusicCard from "@/components/MusicCard";
import Link from 'next/link';
import { Cli } from "grommet-icons";

export default function Home() {
    return (
        <RootLayout>
            <div className="text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Alex Frantz</h1>
                    <p>QA Engineer, Zach Bryan Enthusiast</p>
                </div>

                <hr className="h-px my-2 bg-gray-200 border-0 w-1/2 mx-auto dark:bg-gray-700" />

                <div className="my-4">
                    <div className="bg-terminalback lg:max-w-xl md:max-w-xl sm:max-w-full m-auto">
                        <div className="bg-terminalbar">
                            <div className="pt-2 pl-2">
                                <div className="bg-terminalback w-60 rounded-t-md">
                                    <div className="p-2 pl-4 inline-block">
                                        <Cli className="pr-2" />
                                        <p className="inline">
                                            Command Prompt
                                        </p>
                                        <p className="float-right ml-6">
                                            <Link target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                                X
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* content of cmd */}
                        <div className="p-2 font-mono">
                            <p>Michaelsoft Binbows [Version 10.0.23420.6969]</p>
                            <p>(c) Pixelpeek Development. No Rights Reserved.</p>
                            <br />
                            <p>C:\Users\CoolGuy{'>'}whoami</p>
                            <p>Full Name: <span className="font-bold">Alex Frantz</span></p>
                            <p>Based in: <span className="font-bold">Western New York</span></p>
                            <p>Working at: <span className="font-bold hover:text-medal underline"><Link target="_blank" href="https://medal.tv">Medal.tv</Link></span> as a <span className="font-bold">QA Engineer</span></p>
                            <p>Skills: <span className="font-bold">Java(Type)Script</span>, <span className="font-bold">Python</span>, <span className="font-bold">Go</span></p>
                            <p>Learning: <span className="font-bold">Network Engineering</span>, <span className="font-bold">Game Dev</span>, <span className="font-bold">Frontend</span>, <span className="font-bold">Backend</span></p>
                            <p>Website: <span className="font-bold underline hover:text-gray-500"><Link target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">alexavfrantz.com</Link></span></p>
                            <br />
                            <p>C:\Users\CoolGuy{'>'}</p>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-2 bg-gray-200 border-0 w-1/2 mx-auto dark:bg-gray-700" />

                <div className="my-4">
                    <MusicCard />
                </div>
            </div>
        </RootLayout>
    )
}