export default function Header() {
    return (
        <div className="text-white pt-4">
            <h1 className="font-bold text-2xl">Alex Frantz</h1>
            <p>Professional button clicker & word typer</p>
            <div className="inline-block space-x-2">
            <a className="font-bold hover:underline" href="/">Home</a>
                <a className="font-bold hover:underline" href="experience">Experience</a>
            </div>
            
            <hr className="my-4" />
        </div>
    )
}