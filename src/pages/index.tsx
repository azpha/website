import RootLayout from '@/components/RootLayout';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useState, useEffect } from 'react';

export default function Home() {
    const [doAnimation, setDoAnimation] = useState<boolean>(false);
    const [pastLogo, setPastLogo] = useState<boolean>(false);
    const [text, setText] = useState<string[]>([]);

    const generateRandomTextString = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        const length = 66;
        let result = "";
        
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length)) + " "
        }

        return result;
    }

    useEffect(() => {
        if (location.href.includes("?noAnimation")) {
            const logoElement = document.getElementById("pipboy");
            const textElement = document.getElementById("textwall");
            const mainElement = document.getElementById("mainelement");

            if (logoElement && textElement && mainElement) {
                logoElement.style.display = "none";
                textElement.style.display = "none";
                mainElement.style.display = "block";
            }
        } else {
            setDoAnimation(true)
        }
    })
 
    useEffect(() => {
        if (doAnimation) {
            const element = document.getElementById("pipboy")
            if (element) {
                setTimeout(() => {
                    element.style.display = "none";
                    setPastLogo(true)
                }, 4000)
            }
        }
    }, [doAnimation])

    useEffect(() => {
        const textElement = document.getElementById("textwall");
        const mainElement = document.getElementById("mainelement");
        if (pastLogo && doAnimation) {
            const interval = setInterval(() => {
                setText((prevState) => {
                    return [...prevState, generateRandomTextString()]
                })
            }, 50)

            setTimeout(() => {
                clearInterval(interval)
                if (textElement && mainElement) {
                    textElement.style.display = "none"
                    mainElement.style.display = "block"
                }
            }, 5000)
        }
    }, [pastLogo, doAnimation])

    return (
        <RootLayout>
            {/* "logo", hidden after 4 seconds */}
            <h1 className="text-green-500 text-9xl font-bold italic" id="pipboy">Pip-Boy</h1>

            {/* text wall, hidden until pastLogo */}
            <p className="text-green-500 text-2xl max-w-10 flex-shrink-0" id="textwall">{text}</p>

            {/* and the content :) */}
            <div className="text-green-500 flicker max-w-1/2 hidden" id="mainelement">
                <Header isNotHomePage={false} />
                <div className="text-left">
                    <p className="text-md">
                        <span className="font-bold text-2xl">Hello traveller!</span>
                    </p>
                    <p>Welcome to my website! Feel free to explore & learn more about me :)</p>
                </div>
                <Footer />
            </div>
        </RootLayout>
    )
}