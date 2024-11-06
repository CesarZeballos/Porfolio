'use client'
import Link from "next/link"
import IconButton from "../iconButton"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import TranslateIcon from '@mui/icons-material/Translate';
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { setContactState } from "@/redux/slice";

import { SlCloudDownload } from "react-icons/sl";


const NavBar: React.FC = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setContactState())
    }

    return (
        <div className="px-marginX py-small backdrop-blur-sm bg-darkGreen bg-opacity-50 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-8">
                <Link 
                className={`buttonNavBar ${pathname === '/' ? 'buttonNavBar--active' : ''}`}
                href="/">
                    Home
                </Link>
                
                <Link 
                className={`buttonNavBar ${pathname === '/aboutMe' ? 'buttonNavBar--active' : ''}`}
                href="/aboutMe">
                    About Me
                </Link>
                
                <Link 
                className={`buttonNavBar ${pathname === '/portfolio' ? 'buttonNavBar--active' : ''}`}
                href="/portfolio">
                    Portfolio
                </Link>
                
                <button
                className={`buttonNavBar`}
                onClick={handleClick}>
                    Contact
                </button>
                
                <a
                href="/CV-CesarEZeballos.pdf"
                download={"CV-CesarEZeballos.pdf"}>
                    <IconButton icon={<SlCloudDownload size={16} />} label="Download CV" />
                </a>
            </div>
        </div>
    )
}

export default NavBar