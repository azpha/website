import HeaderItem from "./HeaderItem";

type HeaderProps = {
    isHomePage: boolean
}

export default function Header({
    isHomePage = false
}: HeaderProps) {
    return (
        <>
            <div className="text-white mx-auto my-4 lg:max-w-md">
                <div className="inline-block pb-2 space-x-2">
                    <HeaderItem content="HOME" linkTo={
                        !isHomePage ? "/?noAnimation"
                        : "/"
                    } />
                    <HeaderItem content="LINKS" linkTo="/links" />
                    <HeaderItem content="PROJECTS" linkTo="/projects" />
                    <HeaderItem content="RADIO" linkTo="/radio" />
                    <HeaderItem content="ABOUT" linkTo="/about" />
                </div> 
                <hr className="border-green-500" />
            </div>
        </>
    )
}