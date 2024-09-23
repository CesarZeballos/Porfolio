'use client'
import { IPortfolio } from "@/utils/interfaces"
import Image from "next/image"
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";
import IconButton from "../iconButton";

import { SiFigma } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiBehance } from "react-icons/si";


export const PortfolioCard = (props: IPortfolio) => {
    const {index, image, title, github, vercel, figma, behance} = props
    const [show, setShow] = useState(false)

    return (
        <div
            key={index}
            className="relative h-48 w-96"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            >

            <div className="absolute left-3 z-10 bg-gradient-to-b from-transparent to-darkBlue rounded-3xl h-44 w-80"></div>

            <div className={`absolute rounded-3xl overflow-hidden  ${show ? 'z-30 h-44 w-80 left-3' : 'z-0 h-44 w-80 left-3'}`}>
                {
                    show ? 
                    <div className="bg-darkGreen h-full w-full object-cover flex flex-col gap-2 items-center justify-center">
                        {figma && 
                        <a href={figma} target="_blank">
                        <IconButton icon={<SiFigma size={16}/>} label="Figma" />
                        </a>}

                        {github &&
                        <a href={github} target="_blank">
                        <IconButton icon={<SiGithub size={16}/>} label="Github" />
                        </a>}

                        {vercel &&
                        <a href={vercel} target="_blank">
                        <IconButton icon={<SiVercel size={16}/>} label="Vercel" />
                        </a>}

                        {behance &&
                        <a href={behance} target="_blank">
                        <IconButton icon={<SiBehance size={16}/>} label="Behance" />
                        </a>}
                    </div>
                    : 
                    <Image src={image} alt={title} width={270} height={175} className="h-full w-full object-cover"/>
                }
            </div>

            <div className="absolute bottom-9 z-20 flex flex-row gap-4 items-center">
                <CircleIcon className="text-lightGreen" />
                <p className="body text-white">{title}</p>
            </div>

        </div>
    )
}