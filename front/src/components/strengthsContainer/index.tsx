import { StrengthsArray } from "@/utils/strengths"
import React from "react"
import { Strengths } from "../strengths"
import { Carousel } from "../carousel"


export const StrengthsContainer: React.FC = () => {
    return (
        <div>
            <h1 className="h1 text-white mb-9 mx-marginX">Strengths and Abilities</h1>
            <Carousel>
                {StrengthsArray.map((strength) => (
                    <Strengths key={strength.index} {...strength} />
                ))}
            </Carousel>
        </div>
    )
}
