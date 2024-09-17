import { IPortfolio } from "@/utils/interfaces";

//icons:
import { SiFigma } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiBehance } from "react-icons/si";
import CodeIcon from '@mui/icons-material/Code';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Image from "next/image";
import Link from "next/link";

export const Banner: React.FC<IPortfolio> = ({index, title, type, description, image, github, vercel, figma, behance  }) => {

    return (
        <div key={index} className="relative w-full h-full flex items-center justify-end">
            <div className="absolute z-0 rounded-3xl left-0 w-3/4 h-5/6 overflow-hidden">
                <Image src={image} alt="profile" width={288} height={384} className="w-full h-full object-cover"/>
            </div>
            <div className="relative z-10 w-1/3 h-full">
                <div className="absolute p-2 bg-lightGreen rounded-full left-0 top-10">
                    {type === "design" && <EmojiObjectsIcon className="text-darkBlue"/>}
                    {type === "code" && <CodeIcon className="text-darkBlue"/>}
                </div>
                <div className="bg-lightBlue rounded-3xl py-12 px-9 flex flex-col gap-6 ml-5">
                    <h1 className="h3 text-lightGreen">{title}</h1>
                    <p className="body text-white">{description}</p>
                    <div className="flex flex-row justify-around">
                        {github && <Link href={github} className="buttonSecondary"><SiGithub />Github</Link>}                   
                        {figma && <Link href={figma} className="buttonSecondary"><SiFigma />Figma</Link>}

                        {vercel && <Link href={vercel} className="buttonPrimary"><SiVercel />Vercel</Link>}              
                        {behance && <Link href={behance} className="buttonPrimary"><SiBehance />Behance</Link>}              
                    </div>
                </div>
            </div>
        </div>
    )
}