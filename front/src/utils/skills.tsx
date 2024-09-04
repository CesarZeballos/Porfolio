import { ISkill } from "./interfaces";

//icons
import { SiNextdotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";

export const skillsTop: ISkill[] = [
    {
        index: 0,
        name: "React",
        icon: <SiReact/>
    },
    {
        index: 1,
        name: "Next.js",
        icon: <SiNextdotjs/>
    },
    {
        index: 2,
        name: "Vercel",
        icon: <SiVercel/>
    },
    {
        index: 3,
        name: "TypeScript",
        icon: <SiTypescript/>
    },
    {
        index: 4,
        name: "JavaScript",
        icon: <SiJavascript/>
    },
    {
        index: 5,
        name: "Redux",
        icon: <SiRedux/>
    },
    {
        index: 6,
        name: "Material UI",
        icon: <SiMui/>
    },
    {
        index: 7,
        name: "Tailwind",
        icon: <SiTailwindcss/>
    },
    {
        index: 8,
        name: "Figma",
        icon: <SiFigma/>
    }
]


export const skillsBottom: ISkill[] = [
    {
        index: 0,
        name: "Firebase",
        icon: <RiFirebaseFill/>
    },
    {
        index: 1,
        name: "NestJS",
        icon: <SiNestjs/>
    },
    {
        index: 2,
        name: "Express",
        icon: <SiExpress/>
    },
    {
        index: 3,
        name: "Prisma",
        icon: <SiPrisma/>
    },
    {
        index: 4,
        name: "PostgreSQL",
        icon: <SiPostgresql/>
    },
    {
        index: 5,
        name: "MongoDB",
        icon: <SiMongodb/>
    },
    {
        index: 6,
        name: "Bootstrap",
        icon: <SiBootstrap/>
    },
    {
        index: 7,
        name: "Illustrator",
        icon: <SiAdobeillustrator/>
    },
    {
        index: 8,
        name: "Photoshop",
        icon: <SiAdobephotoshop/>
    }
]