'use client'
import { IStrength } from "@/utils/interfaces"
import { useState } from "react"


export const Strengths = (data: IStrength) => {
    const {index, name, description, icon} = data
    const [show, setShow] = useState(false)
    
    return (
        <div key={index}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="relative h-48 px-4">
            <div className={`absolute w-96 h-44 z-10 rounded-3xl px-9 py-6 flex items-end ${show ? 'bg-lightGreen' : 'bg-lightBlue'}`}>
                {!show && <div className="flex flex-row gap-4 items-center">
                    <p className="text-5xl text-lightGreen">{icon}</p>
                    <p className="label text-white">{name}</p>
                </div>
                }
                {show && 
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2 items-end">
                        <p className="text-2xl text-darkBlue">{icon}</p>
                        <p className="bodyBold text-darkBlue">{name}</p>
                    </div>
                    <p className="body text-darkBlue">{description}</p>
                </div>
                    }
            </div>
            <div className={`relative top-4 right-4 z-0 w-96 h-44 rounded-3xl ${show ? 'bg-lightBlue' : 'bg-lightGreen'}`}>
            </div>
        </div>
    )}