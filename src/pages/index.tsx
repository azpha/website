import RootLayout from "@/components/RootLayout";
import Dropdown from "@/components/Dropdown";
import ProjectCard from "@/components/ProjectsCard";
import Image from 'next/image';
import MusicCard from '@/components/MusicCard'

export default function Home() {
    return (
        <RootLayout>
            <div className="w-1/2 mx-auto text-white">
                <Dropdown content={Music()} name="Music" />
                <Dropdown content={Games()} name="Games" />
                <Dropdown content={Projects()} name="Projects" />
            </div>
        </RootLayout>
    )
} 

function Projects() {
    return [
        <ProjectCard 
            key="1"
            name="Splitstat" 
            description="This was a Discord bot that allowed you to see your statistics from the SplitStat game" 
            urlTo="https://github.com/azpha/splitstat"
        />,
        <ProjectCard 
            key="2"
            name="Rconify" 
            description="A simple tool to connect to RCON services that comply with Valve's RCON specifications" 
            urlTo="https://github.com/azpha/rconify" 
        />
    ]
}

function Games() {
    return [
        <Image key="1" src="https://storage.thatalex.dev/content/firefly-logo-new.png" alt="TLOU Firefly" width="100" height="100" className="inline mr-2" />,
        <Image key="2" src="https://storage.thatalex.dev/content/spiderman.png" alt="Spiderman" width="100" height="100" className="inline mr-2" />,
        <Image key="3" src="https://storage.thatalex.dev/content/rdr2.png" alt="Red Dead Redemption 2" width="100" height="100" className="inline mr-2" />
    ]
}

function Music() {
    return [
        <Image key="1" src="https://storage.thatalex.dev/content/5sos.png" alt="5 Seconds of Summer Cover" width="100" height="100" className="inline mr-2" />,
        <Image key="2" src="https://storage.thatalex.dev/content/tlou-covers-and-rarities.jpg" alt="TLOU Covers and Rarities Cover" width="100" height="100" className="inline mr-2" />,
        <Image key="3" src="https://storage.thatalex.dev/content/zach-bryan.png" alt="Zach Bryan Cover" width="100" height="100" className="inline mr-2" />,
        <Image key="4" src="https://storage.thatalex.dev/content/reputation.jpg" alt="Reputation Cover" width="100" height="100" className="inline mr-2" />,
        <div key="5" className="float-right pt-8">
            <MusicCard key="5" />
        </div>
    ]
}