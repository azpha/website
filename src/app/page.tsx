import Image from 'next/image';
import { Twitter, Bluesky, Medal, GitHub, LinkedIn } from '@/components/Icons'
import ProjectComponent from '@/components/ProjectComponent';
import ContactForm from '@/components/ContactForm';

// data components
import RecentWatch from "@/components/DataComponents/RecentWatch";
import RecentListen from "@/components/DataComponents/RecentListen";
import RecentGame from "@/components/DataComponents/RecentGame";
// import RecentClip from "@/components/DataComponents/RecentClip";
import RecentBook from "@/components/DataComponents/RecentBook";

export default function Home() {
  return (
    <div className="">
      <section id="about">
        <div className="mx-auto text-center p-10">
            <div className="mx-auto grid gap-4 grid-cols-1 lg:grid-cols-2 lg:w-1/2">
                <div className="flex justify-center">
                    <Image className="rounded-full" src={"https://storage.alexav.gg/content/picture.jpg"} alt="Profile Picture" width={250} height={250} />
                </div>
                <div className="text-center lg:text-left lg:my-10 w-full">
                    <h1 className="text-4xl font-bold">Hi, I&apos;m Alex</h1>
                    <p>I&apos;m a junior developer primarily working as QA, but sometimes writing questionable code at <a className="hover:underline text-yellow-400" href="https://medal.tv" target="_blank">Medal.tv</a></p>
                    
                    <div className="block my-2 space-x-2">
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
                        <a href="/links" className="opacity-40 text-sm">
                            <p className="underline">and more..</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>

    <section id="projects">
        <div className="bg-zinc-900 py-8">
            <h1 className="pb-8 text-3xl text-center font-bold">My Projects</h1>

            <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[70%] lg:w-[50%] mx-auto">
                    <ProjectComponent 
                        name="medaltv-wrapper"
                        description="A JavaScript wrapper for the Medal.tv developer API"
                        urlTo="https://github.com/azpha/medaltv-wrapper"
                        tags={["JavaScript"]}
                    />
                    <ProjectComponent 
                        name="splitstat"
                        description="A Discord bot for SplitStat: Arena Warfare statistics"
                        urlTo="https://github.com/azpha/splitstat"
                        tags={["JavaScript", "DiscordJS"]}
                    />
                    <ProjectComponent 
                        name="steam-deck-file-sync"
                        description="Sync clips from Steam Deck"
                        urlTo="https://github.com/azpha/steam-deck-file-sync"
                        tags={["Python", "Flask"]}
                    />
                    <ProjectComponent 
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
                    <RecentWatch />
                    <RecentListen />
                    <RecentGame />
                    {/* <RecentClip /> */}
                    <RecentBook />
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div className="bg-zinc-900 py-8">
            <ContactForm />
        </div>
    </section>
    </div>
  );
}
