import ProjectCard from "@/components/ProjectsCard"
import RootLayout from "@/components/RootLayout"

export default function Projects() {
    return (
        <RootLayout>
            <div className="text-white">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl text-center">Projects</h1>
                </div>

                <div className="space-y-2 w-full flex flex-col justify-center items-center">
                    <ProjectCard
                        name="SplitStat"
                        description="SplitStat was a Discord bot that allowed you to see your stats & other player stats from the Splitgate game. It would also allow you to see the results of an in-game match or what matches a player had played recently."
                        urlTo="https://github.com/azpha/splitstat"
                        technologies={
                            [
                                "JavaScript",
                                "Linux"
                            ]
                        }
                    />
                    <ProjectCard
                        name="medaltv-wrapper"
                        description="medaltv-wrapper is a Node.js wrapper for the Medal.tv Public API, allowing you to fetch clips from the platform and use the data in your code."
                        urlTo="https://github.com/azpha/medaltv-wrapper"
                        technologies={
                            [
                                "JavaScript"
                            ]
                        }
                    />
                    <ProjectCard
                        name="mcsrvstat-wrapper"
                        description="mcsrvstat-wrapper is a Node.js wrapper for MCSRVSTAT API, allowing you to fetch the status of Minecraft Java & Bedrock servers by running 1 method."
                        urlTo="https://github.com/azpha/mcsrvstat-js"
                        technologies={
                            [
                                "JavaScript"
                            ]
                        }
                    />
                    <ProjectCard
                        name="PManager"
                        description="PManager is a simple Express server that allows you to restart/stop/start your PM2 scripts easily remotely for uses like GitHub Actions."
                        urlTo="https://github.com/azpha/pmanager"
                        technologies={
                            [
                                "JavaScript"
                            ]
                        }
                    />
                    <ProjectCard
                        name="Watchlist"
                        description="Watchlist is a NextJS website built on the T3 Stack simply tracking my watch history, displaying stuff like my recently watched TV and Movies."
                        urlTo="https://github.com/azpha/tv-watchlist"
                        technologies={
                            [
                                "Typescript",
                                "NextJS",
                                "tRPC"
                            ]
                        }
                    />
                </div>
            </div>
        </RootLayout>
    )
}