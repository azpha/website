import ListBox from "../components/ListBox";
import Project from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";

// project components
import RecentWatch from "../components/ProjectComponents/RecentWatch";
import RecentPhoto from "../components/ProjectComponents/RecentPhoto";
import RecentListens from "../components/ProjectComponents/RecentListens";
import RecentClip from '../components/ProjectComponents/RecentClip';
import RecentGame from "../components/ProjectComponents/RecentGame";
import RecentBook from "../components/ProjectComponents/RecentBook";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="mx-auto w-full lg:w-1/2">
                <section id="projects" className="mb-4">
                    <div className="text-center lg:text-left mb-4">
                        <h1 className="text-2xl font-bold">Projects</h1>
                        <p>Cool stuff I'm working on</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Project 
                            name="medaltv-wrapper"
                            description="A JavaScript wrapper for the Medal.tv developer API"
                            urlTo="https://github.com/azpha/medaltv-wrapper"
                            image="https://storage.alexav.gg/content/medal-logo.png"
                        />
                        <Project 
                            name="splitstat"
                            description="A Discord bot for SplitStat: Arena Warfare statistics"
                            urlTo="https://github.com/azpha/splitstat"
                            image="https://storage.alexav.gg/content/splitstat-logo.png"
                        />
                        <Project 
                            name="steam-deck-file-sync"
                            description="Sync clips from Steam Deck"
                            urlTo="https://github.com/azpha/steam-deck-file-sync"
                            image="https://storage.alexav.gg/content/steam-deck.jpg"
                        />
                        <Project 
                            name="subscription-tracker"
                            description="Easily track upcoming subscriptions"
                            urlTo="https://github.com/azpha/subscription-tracker"
                            image="https://storage.alexav.gg/content/a7a289ac-9466-4f3f-b904-2f9be897e0f7.png"
                        />
                    </div>
                </section>
                <section id="data" className="my-5 py-5 px-4 bg-zinc-500">
                    <div className="text-center lg:text-left mb-4">
                        <h1 className="text-2xl font-bold">Data</h1>
                        <p>Cool data from some of my accounts/projects</p>

                        <hr className="my-2" />

                        <div className="grid grid-cols-1 md:grid-cols-2 auto-cols-fr gap-4">
                            <div className="w-full min-w-[200px]">
                                <RecentListens />
                            </div>
                            <div className="w-full min-w-[200px]">
                                <RecentPhoto />
                            </div>
                            <div className="w-full min-w-[200px]">
                                <RecentWatch />
                            </div>
                            <div className="w-full min-w-[200px]">
                                <RecentBook />
                            </div>
                            <div className="w-full min-w-[200px]">
                                <RecentClip />
                            </div>
                            <div className="w-full min-w-[200px]">
                                <RecentGame />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" className="my-5 p-4">
                    <div className="container max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
                            <div>
                                <h2 className="text-3xl font-bold">About Me</h2>
                                <p className="text-muted-foreground mt-4">
                                    I'm a "junior" developer with a passion for software and games.
                                    I have experience in languages like JavaScript and Python, and am primarily
                                    working in libraries like React.
                                </p>
                                <div className="mt-8 grid grid-cols-2 w-full mx-auto gap-4">
                                    <ListBox 
                                        title="Skills"
                                        points={[
                                            "JavaScript",
                                            "Python",
                                            "Java",
                                            "SQL",
                                            "Prisma"
                                        ]}
                                    />
                                    <ListBox 
                                        title="Experience"
                                        points={[
                                            "Working at Medal.tv as a QA tester",
                                            "4 years as a JavaScript developer",
                                            "Worked on various side-projects"
                                        ]}
                                    />
                                </div>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}