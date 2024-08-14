import Footer from "./components/Footer";
import Header from "./components/Header";
import ListBox from "./components/ListBox";
import Project from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

// project components
import RecentWatch from "./components/ProjectComponents/RecentWatch";
import RecentPhoto from "./components/ProjectComponents/RecentPhoto";
import RecentListens from "./components/ProjectComponents/RecentListens";

export default function Home() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Header />
            <div className="mx-auto lg:w-1/2">
                <section id="projects">
                    <div className="mb-4 text-center md:text-left">
                        <h1 className="text-3xl font-bold">
                            Projects
                        </h1>
                        <p>Cool stuff I'm working on</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Project 
                                name="medaltv-wrapper"
                                description="A JavaScript wrapper for the Medal.tv Developer API"
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
                                description="Sync clips from Steam Deck > your computer easily"
                                urlTo="https://github.com/azpha/steam-deck-file-sync"
                                image="https://storage.alexav.gg/content/steam-deck.jpg"
                            />
                        </div>
                </section>
                <section id="watching" className="my-5 py-10 px-4 bg-gray-500">
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                        <div className="flex justify-center items-center">
                            <div className="text-left md:text-center">
                                <h1 className="text-4xl font-bold">What am I watching?</h1>
                                <p>Cool shows and movies I'm watching</p>
                            </div>
                        </div>
                        <div>
                            <RecentWatch />
                        </div>
                    </div>
                </section>
                <section id="photos" className="my-5 py-10 px-4">
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                        <div className="flex justify-center items-center">
                            <div>
                                <h1 className="text-4xl font-bold">What am I capturing?</h1>
                                <p>Cool game photos I've taken recently</p>
                            </div>
                        </div>
                        <div>
                            <RecentPhoto />
                        </div>
                    </div>
                </section>
                <section id="listens" className="my-5 py-10 px-4 bg-gray-500">
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                        <div className="flex justify-center items-center">
                            <div>
                                <h1 className="text-4xl font-bold">What am I listening to?</h1>
                                <p>I listen to some good stuff I swear</p>
                            </div>
                        </div>
                        <div>
                            <RecentListens />
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
                                <div className="mt-8 grid grid-cols-2 gap-4">
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
            <Footer />
        </main>
    )
}