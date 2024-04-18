import HeaderItem from "./HeaderItem";

type HeaderProps = {
    isNotHomePage: boolean
}

export default function Header({
    isNotHomePage = false
}: HeaderProps) {
    return (
        <>
            <div className="text-white max-w-sm mx-auto pt-2 pb-4">
                <div className="inline-block pb-2 space-x-6 text-center">
                    <HeaderItem content="HOME" linkTo={
                        isNotHomePage ? "/?noAnimation"
                        : "/"
                    } />
                    <HeaderItem content="LINKS" linkTo="/links" />
                    <HeaderItem content="PROJECTS" linkTo="/projects" />
                    <HeaderItem content="ABOUT" linkTo="/about" />
                </div> 
                <hr className="border-green-500" />
            </div>
        </>
    )
}