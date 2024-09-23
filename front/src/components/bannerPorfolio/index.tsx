'use client'
import { portfolio } from "@/utils/portfolio"
import { Banner } from "../banner"
import { useState } from "react"
import { IPortfolio } from "@/utils/interfaces"

// icons
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const BannerPortfolio: React.FC = () => {
    const [projects, setProjects] = useState<IPortfolio[]>(portfolio.filter(project => project.description !== undefined))
    const [view, setView] = useState(0)

    const handleClick = (index: number) => {
        setView(index)
    }

    const handleNext = () => {
        if(view < 2){setView(view + 1)}
        else {setView(0)}
    }

    const handlePrevious = () => {
        if(view > 0){setView(view - 1)}
        else {setView(2)}
    }

    return (
        <div className="sectionContainer">
                <Banner
                    key={projects[view].index}
                    index={projects[view].index}
                    title={projects[view].title}
                    type={projects[view].type}
                    description={projects[view].description}
                    image={projects[view].image}
                    figma={projects[view].figma}
                    behance={projects[view].behance}
                    github={projects[view].github}
                    vercel={projects[view].vercel}
                />
                <div className="flex flex-row gap-4 my-4 items-center w-full justify-center">
                    <button onClick={handlePrevious} className="buttonSecondary"><NavigateBeforeIcon /></button>
                    <button onClick={() => handleClick(0)} className="buttonSecondary">{view === 0 ? <CircleIcon /> : <RadioButtonUncheckedIcon />}</button>
                    <button onClick={() => handleClick(1)} className="buttonSecondary">{view === 1 ? <CircleIcon /> : <RadioButtonUncheckedIcon />}</button>
                    <button onClick={() => handleClick(2)} className="buttonSecondary">{view === 2 ? <CircleIcon /> : <RadioButtonUncheckedIcon />}</button>
                    <button onClick={handleNext} className="buttonSecondary"><NavigateNextIcon /></button>
                </div>

        </div>
    )
}