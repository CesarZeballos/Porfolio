import { StrengthsArray } from "@/utils/strengths"
import React from "react"
import { Strengths } from "../strengths"
import { Carousel } from "../carousel"


export const StrengthsContainer: React.FC = () => {
    return (
        <div>
            <Carousel>
                {StrengthsArray.map((strength) => (
                    <Strengths key={strength.index} {...strength} />
                ))}
            </Carousel>
        </div>
    )
}
