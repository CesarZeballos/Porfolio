'use client'
import { IPortfolio } from "@/utils/interfaces";
import { portfolio } from "@/utils/portfolio";
import { useEffect, useState } from "react";


import CodeIcon from '@mui/icons-material/Code';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { PortfolioCard } from "../portfolioCard";


export const PortfolioContainer = () => {
    const [projects, setProjects] = useState<IPortfolio[]>();
    const [filter, setFilter] = useState<string>("all");

    useEffect(() => {
        setProjects(portfolio)
    }, [])


    const handleClick = (filter: string) => {
        setFilter(filter)
        if(filter === "all"){ setProjects(portfolio) }
        else {
            setProjects(portfolio.filter(project => project.type === filter))
        }
    }

    return (
        <div className="sectionContainer">
            <h1 className="h1 text-white">My projects</h1>
            <div className="flex flex-row gap-4 my-4">
                <button className={`buttonPrimary ${filter === "all" ? "buttonPrimaryHover" : ""}`} onClick={() => handleClick("all")}>All Projects</button>
                <button className={`buttonPrimary ${filter === "design" ? "buttonPrimaryHover" : ""}`} onClick={() => handleClick("design")}><EmojiObjectsIcon />Design</button>
                <button className={`buttonPrimary ${filter === "development" ? "buttonPrimaryHover" : ""}`} onClick={() => handleClick("development")}><CodeIcon />Development</button>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {projects?.map((project) => (
                    <PortfolioCard key={project.index} {...project} />
                ))}
            </div>
        </div>
    )
}