import { skillsBottom, skillsTop } from "@/utils/skills"
import { Tools } from "../tools"


export const Skills = () => {

    return (
        <div className="sectionContainer">
            <h1 className="h1 text-white mb-9">Technologies and Tools</h1>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-6 px-16 py-12 rounded-3xl bg-lightGreen">
                    <h1 className="label text-darkBlue">Technologies and Tools</h1>
                    <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                        {skillsTop.map((skill) => (
                            <Tools key={skill.index} skills={skill} color="dark" />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-6 px-16 py-12">
                    <h1 className="label text-white">Other technologies</h1>
                    <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                        {skillsBottom.map((skill) => (
                            <Tools key={skill.index} skills={skill} color="light" />
                        ))}
                        </div>
                </div>
            </div>
        </div>
)}