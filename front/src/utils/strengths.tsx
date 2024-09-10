import { IStrength } from "./interfaces";

//icons
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import Diversity2RoundedIcon from '@mui/icons-material/Diversity2Rounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';

export const StrengthsArray: IStrength[] = [

    {
        index: 0,
        name: "Business Understanding",
        description: "In-depth knowledge in financial and accounting operations, as well as in various business models, allowing me to evaluate and optimize processes.",
        icon: <BusinessRoundedIcon fontSize="inherit"/>
    },

    {
        index: 1,
        name: "Creativity and User-Centered Design",
        description: "Ability to design attractive and functional user interfaces, always focused on improving the experience and usability.",
        icon: <EmojiObjectsRoundedIcon fontSize="inherit"/>
    },

    {
        index: 2,
        name: "Learning Capacity and Adaptability",
        description: "Constant commitment to learning and adapting to new technologies and trends in design and development.",
        icon: <SchoolRoundedIcon fontSize="inherit"/>
    },

    {
        index: 3,
        name: "Leadership and Collaboration",
        description: "Experienced in team and project leadership, with skills in mentoring and guiding colleagues towards collective success.",
        icon: <Diversity2RoundedIcon fontSize="inherit"/>
    },

    {
        index: 4,
        name: "Curiosity and Passion for Challenges",
        description: "Proactive and curious attitude towards new challenges, always looking to learn and explore innovative technologies.",
        icon: <MilitaryTechRoundedIcon fontSize="inherit"/>
    },

    {
        index: 5,
        name: "Analytical and Problem Solving Skills",
        description: "Ability to analyze data and solve complex problems accurately, focusing on innovative and effective solutions.",
        icon: <PsychologyRoundedIcon fontSize="inherit"/>
    }
]
