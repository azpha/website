import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";

export default function Home() {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="lg:w-1/3 sm:w-full mx-auto">
                <Header />

                <div className="space-y-2">
                    <Project 
                        name={"SplitStat"} 
                        description={"SplitStat was a Discord bot that allowed you to monitor your SplitGate stats, all from your Discord server."} 
                        urlTo={"https://github.com/azpha/splitstat"} 
                    />
                    <Project 
                        name={"medaltv-wrapper"} 
                        description={"A simple NodeJS wrapper for the Medal.tv Developer API"} 
                        urlTo={"https://github.com/azpha/medaltv-wrapper"} 
                    />
                    <Project 
                        name={"pmanager"} 
                        description={"A simple self-hosted server to manage pm2 containers"} 
                        urlTo={"https://github.com/azpha/pmanager"} 
                    />
                </div>
            </div>

            <Footer />
        </div>
    )
}