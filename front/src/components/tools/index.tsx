import { ISkill, ITools } from "@/utils/interfaces"


export const Tools = (data: ITools) => {
    const { skills, color } = data
    const { name, icon } = skills

    return (
        <div className="flex gap-2 items-center">
            <p className={color === "dark" ? "text-darkBlue" : "text-white"}>{icon}</p>
            <h1 className={color === "dark" ? "text-darkBlue body" : "text-white body"}>{name}</h1>
        </div>
    )}