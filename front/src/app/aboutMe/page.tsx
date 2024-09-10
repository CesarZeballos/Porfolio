import { Experience } from "@/components/experience"
import { PresentationAbout } from "@/components/presentationAbout"
import { Skills } from "@/components/skills"
import { StrengthsContainer } from "@/components/strengthsContainer"


const AboutMe: React.FC = () => {

    return (
        <div>
            <PresentationAbout/>
            <Skills/>
            <StrengthsContainer/>
            <Experience/>
        </div>
    )
}

export default AboutMe