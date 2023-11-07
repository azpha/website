import RootLayout from "@/components/RootLayout"
import Image from "next/image"
import ProjectCard from "@/components/ProjectsCard"

export default function Resume() {
    return (
        <RootLayout>
            <div className="text-center mx-auto text-white">
                <div className="flex flex-wrap justify-center pb-2">
                    <Image src="https://storage.thatalex.dev/content/pfp.png" width="130" height="130" alt="PFP" className="rounded-3xl" />
                </div>
                <h1 className="text-2xl font-bold">Alex Frantz</h1>
                <p>alex@alexavfrantz.com</p>
                <p>Manual QA Tester + Test Automation Engineer</p>

                <div className="flex flex-wrap w-8/12 mx-auto">
                    <div className="flex-1 p-4">
                        <h1 className="pb-2">Experience</h1>
                        <hr className="w-1/12 mx-auto" />
                        <div className="flex flex-col justify-center mx-auto pt-2">
                            <ProjectCard 
                                key="1"
                                name="Medal.tv -- QA Engineer"
                                subHeading="Mar. 2022 - Present"
                                description="Testing features before anyone else to weed out breaking bugs. Also heading our test automation efforts to make testing as smooth as possible."
                                urlTo="https://medal.tv"
                            />
                        </div>

                        <h1 className="pb-2 pt-2">Education</h1>
                        <hr className="w-1/12 mx-auto" />
                        <div className="flex flex-col justify-center mx-auto pt-2">
                            <ProjectCard 
                                key="1"
                                name="Acellus Academy"
                                description="High school accrediation, studying Computer Science"
                                urlTo="https://medal.tv"
                            />
                        </div>
                    </div>
                    <div className="flex-1 p-4">
                        <p className="pb-2">Skills</p>
                        <hr className="w-1/12 mx-auto" />
                        <ul className="pt-2 pb-2 list-disc list-inside">
                            <li>
                                Test Automation
                            </li>
                            <li>
                                End-to-end Testing
                            </li>
                            <li>
                                Customer Support
                            </li>
                        </ul>

                        <hr className="w-1/12 mx-auto" />

                        <p className="pt-2">Contact</p>
                        <p>Email: alex@alexavfrantz.com</p>
                        <p>LinkedIn: in/thatalex</p>
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}