'use client'
import Link from "next/link"
import Profile from "../image"
import { useDispatch } from "react-redux";
import { setContactState } from "@/redux/slice";


export const Presentation: React.FC = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setContactState())
    }
    
    return (
            <div className="sectionContainer flex flex-col gap-6 items-center justify-center">
                <h1 className="h1 text-white" >Cesar E. Zeballos</h1>
                <h2 className="body text-white">Full Stack Developer | UX/UI Designer | Business Administrator</h2>
                <p className="body text-white">My focus is on understanding user needs and translating them into visually appealing and technically sound solutions.</p>
                <div className="flex flex-row gap-4">
                    <Link href="/portfolio" className="buttonSecondary">Discover my work</Link>
                    <button onClick={handleClick} className="buttonPrimary">Connect with me</button>
                </div>
      </div>

    )}