import RootLayout from "@/components/RootLayout";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AboutPage() {
    return (
        <RootLayout>
            <Header isNotHomePage={true} />
                <div className="text-center text-green-500">
                    <h1 className="font-bold text-2xl">About this website</h1>
                    <p className="max-w-10">This is just a hobby project I thought was cool!<br /> I plan to play with it a bit to grasp more CSS, but so far, pretty cool right?</p>
                </div>
            <Footer />
        </RootLayout>
    )
}