import Footer from "./components/Footer";
import Header from "./components/Header";
import ListBox from "./components/ListBox";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";

export default function Home() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Header />
            <div className="mx-auto lg:w-1/2">
                <section id="projects">
                    <div className="mb-4">
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
                <section className="bg-muted py-10 px-4">
                    <div className="container max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-3xl font-bold">About Me</h2>
                                <p className="text-muted-foreground mt-4">
                                I'm a junior developer with a burning passion for creating not only frontend applications, but also games.
                                I have experience in languages like JavaScript and Python, along with libraries like React.
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