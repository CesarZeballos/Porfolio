import { IExperience } from "@/utils/interfaces"
import CircleIcon from '@mui/icons-material/Circle';


export const Position = (prop: IExperience) => {
    const { index, name, description1, description2 } = prop
    return (
        <div key={index} className="flex flex-col gap-2">
            <h1 className="h3 text-lightGreen py-2">{name}</h1>
            <div className="flex flex-row gap-4 ml-9">
                <CircleIcon className="text-lightGreen" />
                <p className="body text-white">{description1}</p>
            </div>
            <div className="flex flex-row gap-4 ml-9">
                <CircleIcon className="text-lightGreen" />
                <p className="body text-white">{description2}</p>
            </div>
        </div>
    )
}