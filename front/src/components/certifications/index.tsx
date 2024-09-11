import { certificateArray } from "@/utils/certificate"
import { Carousel } from "../carousel"
import { Certificate } from "../certificate"


export const Certifications: React.FC = () => {
    return (
        <div className="sectionContainer">
            <h1 className="h1 text-white mb-9">Certifications</h1>
            <Carousel>
                {certificateArray.map((certification) => (
                    <Certificate key={certification.index} {...certification} />
                ))}
            </Carousel>
        </div>
    )
}