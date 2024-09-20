import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="text-white mx-auto pt-4 w-full sm:w-1/2 text-center lg:text-left">
            <Link to={"/"}>
                <h1 className="text-2xl font-bold hover:underline">Alex Frantz</h1>
            </Link>
            <p>Professional button clicker & word typer</p>

            <hr className="my-4" />
        </div>
    )
}