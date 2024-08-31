'use client'
import Link from "next/link"
import IconButton from "../iconButton"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import TranslateIcon from '@mui/icons-material/Translate';
import { usePathname } from "next/navigation";


const NavBar: React.FC = () => {
    const pathname = usePathname();

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
                
                <Link 
                className={`buttonNavBar ${pathname === '/contact' ? 'buttonNavBar--active' : ''}`}
                href="/contact">
                    Contact
                </Link>
                
                <a
                href="/CV-CesarEZeballos.pdf"
                download={"CV-CesarEZeballos.pdf"}>
                    <IconButton icon={<CloudDownloadIcon />} label="Download CV" />
                </a>
            </div>
            <button className="iconButton2"><TranslateIcon fontSize="inherit"/></button>
        </div>
    )
}

export default NavBar