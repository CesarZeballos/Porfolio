import { experienceArray } from "@/utils/experience"
import { Position } from "../position"



export const Experience = () => {
    return (
        <div className="sectionContainer">
            <h1 className="h1 text-white mb-9">Professional Experience</h1>
            <div className="flex flex-col gap-9">
                {experienceArray.map((experience) => (
                    <Position key={experience.index} {...experience} />
                ))}
            </div>
        </div>
    )
}