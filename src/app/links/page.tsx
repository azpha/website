import Link from "next/link";
import CustomButton from "@/components/CustomButton";

export default function Links() {
    return (
        <div className="min-h-screen bg-black flex justify-center items-center text-black">
            <div className="bg-white rounded-lg p-4 text-center mb-20">
                <Link href="/">
                    <h1 className="hover:underline font-bold text-2xl text-center">Alex Frantz</h1>
                </Link>
                <p>QA @ <a href="https://medal.tv" className="hover:underline" target="_blank">Medal.tv</a></p>
                <hr className="my-2 mx-auto border-black" />
                <div className="space-y-2">
                    <CustomButton 
                        to="https://medal.tv/users/215577"
                        label="Medal"
                    />
                    <CustomButton 
                        to="https://twitter.com/carlgrimesdupe"
                        label="Twitter"
                    />
                    <CustomButton 
                        to="https://bsky.app/profile/alexav.gg"
                        label="Bluesky"
                    />
                    <CustomButton 
                        to="https://github.com/azpha"
                        label="GitHub"
                    />
                    <CustomButton 
                        to="https://last.fm/user/lulawex"
                        label="Last.fm"
                    />
                    <CustomButton 
                        to="https://linkedin.com/in/thatalex"
                        label="LinkedIn"
                    />
                </div>
            </div>
        </div>
    )
}