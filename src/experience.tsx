import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";

export default function Experience() {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="lg:w-1/3 sm:w-full mx-auto">
                <Header />

                <h1 className="text-2xl font-bold my-4">Career</h1>
                <div className="space-y-2">
                    <Project 
                        name={"Medal.tv"} 
                        description={"I do QA at Medal, the largest game clipping platform."} 
                        subtitle={"2022 - Present"}
                        bullets={
                            [
                                "Test & ensure the product is as bug-free as humanly possible",
                                "Helping write tests in code & automate tedious parts of QA testing"
                            ]
                        }
                    />
                </div>

                <h1 className="text-2xl font-bold my-4">Education/Certification</h1>
                <div className="space-y-2">
                    <Project 
                        name={"Pembroke CSD"} 
                        description={"Skewl is kewl (jk it just rhymes)"} 
                        subtitle={"2013 - 2021"}
                    />
                    <Project 
                        name={"GVBOCES"} 
                        description={"Skewl is kewl (jk it just rhymes)"} 
                        subtitle={"2021 - 2022"}
                    />
                    <Project 
                        name={"Acellus Academy"} 
                        description={"Skewl is kewl (jk it just rhymes)"} 
                        subtitle={"2022 - Present"}
                    />
                    <Project 
                        name={"CS50"} 
                        description={"Harvard CS50 Program"} 
                        subtitle={"2023 - Present"}
                    />
                </div>
            </div>

            <Footer />
        </div>
    )
}