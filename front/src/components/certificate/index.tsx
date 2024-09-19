'use client'
import { ICertificate } from "@/utils/interfaces"
import Image from "next/image"
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";


export const Certificate = (props: ICertificate) => {
    const {index, image, title} = props
    const [show, setShow] = useState(false)

    return (
        <div
            key={index}
            className="relative h-48 w-96"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            >

            <div className="absolute left-3 z-10 bg-gradient-to-b from-transparent to-darkBlue rounded-3xl h-44 w-80"></div>

            <div className={`absolute rounded-3xl overflow-hidden  ${show ? 'z-30 h-48 w-96 left-0' : 'z-0 h-44 w-80 left-3'}`}>
                <Image src={image} alt={title} width={270} height={175} className="h-full w-full object-cover"/>
            </div>

            <div className="absolute bottom-9 z-20 flex flex-row gap-4 items-center">
                <CircleIcon className="text-lightGreen" />
                <p className="body text-white">{title}</p>
            </div>

        </div>
    )
}