import RootLayout from "@/components/RootLayout";
import Link from 'next/link';
import ProjectCard from "@/components/ProjectsCard";
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
                    <div className="bg-terminalback lg:max-w-xl sm:max-w-full m-auto">
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
                
                <div>
                    <h1 className="text-center text-2xl font-bold">Projects</h1>
                    <div className="mt-2 flex flex-col justify-center items-center space-y-2">
                        <ProjectCard
                            name="SplitStat"
                            description="SplitStat was a Discord bot that allowed you to see your stats & other player stats from the Splitgate game. It would also allow you to see the results of an in-game match or what matches a player had played recently."
                            urlTo="https://github.com/azpha/splitstat"
                            technologies={
                                [
                                    "JavaScript",
                                    "Server Management"
                                ]
                            }
                        />
                        <ProjectCard
                            name="Rconify"
                            description="Rconify is a JavaScript package that allows you to connect & issue commands to a Valve-compliant RCON game server. This is useful for firing commands to games like Minecraft, Project Zomboid and more."
                            urlTo="https://github.com/azpha/rconify"
                            technologies={
                                [
                                    "TypeScript",
                                ]
                            }
                        />
                        <ProjectCard
                            name="MCSRVSTAT Wrapper"
                            description="MCSRVSTAT is a Minecraft server status website that provides an API to check the status/retrieve information about a Minecraft server. This package is a wrapper of that API, easily allowing you to fetch data from your NodeJS code."
                            urlTo="https://github.com/azpha/mcsrvstat-js"
                            technologies={
                                [
                                    "JavaScript",
                                ]
                            }
                        />
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}