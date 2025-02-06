import Layout from "../components/Layout";
export default function NotFound() {
    return (
        <Layout>
            <div className="min-h-screen flex justify-center items-center">
                <div className="text-center pb-28">
                    <h1 className="text-2xl font-bold">well that sucks</h1>
                    <p>that page doesn't exist. skill issue</p>
                    <a href="#" className="underline" onClick={() => history.back()}>go back?</a>
                </div>
            </div>
        </Layout>
    )
}