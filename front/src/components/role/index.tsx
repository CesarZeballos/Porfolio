'use client'
import { IRoleProps } from "@/utils/interfaces"
import { useState } from "react"


const Role = (prop: IRoleProps) => {
    const {title, description} = prop
    const [show, setShow] = useState(false)
    return (
        <div 
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="relative w-72 h-72 rounded-full overflow-hidden">
            <div className="w-full h-full bg-lightBlue flex items-center justify-center p-6">
                <p className="h3 text-white text-center">{title}</p>
            </div>
            {show && 
            <div className="absolute top-0 z-10 w-full h-full bg-lightGreen flex flex-col items-center justify-center gap-2 p-6">
                <p className="h3 text-darkBlue text-center">{title}</p>
                <p className="body text-darkBlue text-center">{description}</p>
            </div>
            }
        </div>
    )
}

export default Role