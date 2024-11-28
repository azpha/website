import Header from "./Header"
import Footer from "./Footer"

export default function Layout({
    children
}: {
    children: JSX.Element | JSX.Element[]
}) {
    return (
        <main className="bg-black select-none text-white min-h-screen">
            <Header />
            {children}
            <Footer />
        </main>
    )
}