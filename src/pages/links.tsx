import CustomButton from "../components/CustomButton";
import { Bluesky, GitHub, LastFM, LinkedIn, Medal, Twitter } from "../components/Icons";

export default function Links() {
    return (
        <div className="min-h-screen bg-black flex justify-center items-center">
            <div className="bg-white rounded-lg p-4 text-center">
                <a href="/">
                    <h1 className="hover:underline font-bold text-2xl text-center">Alex Frantz</h1>
                </a>
                <p>QA @ <a href="https://medal.tv" className="hover:underline" target="_blank">Medal.tv</a></p>

                <hr className="my-2 mx-auto border-black" />

                <div className="space-y-2">
                    <CustomButton icon={<Medal />} to="https://medal.tv/users/215577">Medal</CustomButton>
                    <CustomButton icon={<Twitter />} to="https://twitter.com/carlgrimesdupe">Twitter</CustomButton>
                    <CustomButton icon={<Bluesky />} to="https://bsky.app/profile/alexav.gg">Bluesky</CustomButton>
                    <CustomButton icon={<GitHub />} to="https://github.com/azpha">GitHub</CustomButton>
                    <CustomButton icon={<LastFM />} to="https://last.fm/user/lulawex">Last.fm</CustomButton>
                    <CustomButton icon={<LinkedIn />} to="https://linkedin.com/in/thatalex">LinkedIn</CustomButton>
                </div>
            </div>
        </div>
    )
}