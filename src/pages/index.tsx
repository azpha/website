import Project from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import { GitHub, Bluesky, Twitter, Medal, LinkedIn } from '../components/Icons';

// project components
import RecentWatch from "../components/ProjectComponents/RecentWatch";
import RecentPhoto from "../components/ProjectComponents/RecentPhoto";
import RecentListens from "../components/ProjectComponents/RecentListens";
import RecentClip from '../components/ProjectComponents/RecentClip';
import RecentGame from "../components/ProjectComponents/RecentGame";
import RecentBook from "../components/ProjectComponents/RecentBook";

export default function Home() {
    return (
        <Layout>
            <section id="about">
                <div className="w-full mx-auto text-center p-10">
                    <div className="my-1">
                        <h1 className="text-3xl font-bold">Hi, I'm Alex</h1>
                        <p>I'm a junior developer working as QA + sometimes writing questionable code at <a className="hover:underline text-yellow-400" href="https://medal.tv" target="_blank">Medal.tv</a></p>
                    </div>

                    <div className="block space-x-2">
                        {/* socials */}
                        <a href="https://twitter.com/carlgrimesdupe" target="_blank">
                            <Twitter />
                        </a>
                        <a href="https://bsky.app/profile/alexav.gg" target="_blank">
                            <Bluesky />
                        </a>
                        <a href="https://medal.tv/users/215577" target="_blank">
                            <Medal />
                        </a>
                        <a href="https://github.com/azpha/website" target="_blank">
                            <GitHub />
                        </a>
                        <a href="https://linkedin.com/in/thatalex" target="_blank">
                            <LinkedIn />
                        </a>
                    </div>

                    <div className="my-4">
                        <a className="p-2 bg-white text-black rounded-lg" href="#projects">View My Work</a>
                    </div>
                </div>
            </section>

            <section id="projects">
                <div className="bg-zinc-900 py-8">
                    <h1 className="pb-8 text-3xl text-center font-bold">My Projects</h1>

                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[70%] lg:w-[50%] mx-auto">
                            <Project 
                                name="medaltv-wrapper"
                                description="A JavaScript wrapper for the Medal.tv developer API"
                                urlTo="https://github.com/azpha/medaltv-wrapper"
                                tags={["JavaScript"]}
                            />
                            <Project 
                                name="splitstat"
                                description="A Discord bot for SplitStat: Arena Warfare statistics"
                                urlTo="https://github.com/azpha/splitstat"
                                tags={["JavaScript", "DiscordJS"]}
                            />
                            <Project 
                                name="steam-deck-file-sync"
                                description="Sync clips from Steam Deck"
                                urlTo="https://github.com/azpha/steam-deck-file-sync"
                                tags={["Python", "Flask"]}
                            />
                            <Project 
                                name="subscription-tracker"
                                description="Track upcoming subscriptions"
                                urlTo="https://github.com/azpha/subscription-tracker"
                                tags={["JavaScript", "ReactJS", "Vite"]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="data">
                <div className="py-8">
                    <h1 className="pb-8 text-3xl text-center font-bold">My Data</h1>
                    
                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[70%] lg:w-[50%] mx-auto">
                            <RecentListens />
                            <RecentPhoto />
                            <RecentWatch />
                            <RecentBook />
                            <RecentClip />
                            <RecentGame />
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="bg-zinc-900 py-8">
                    <ContactForm />
                </div>
            </section>
        </Layout>
    )
}