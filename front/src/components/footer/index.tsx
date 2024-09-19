import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

const Footer: React.FC = () => {

    return (
        <div className="px-marginX py-marginY flex flex-row justify-between items-center">
            <h1 className="body text-white">Cesar E. Zeballos, september 2024</h1>
            <div className="flex flex-row gap-4 items-center">
                <p className="body text-white">Connect with me</p>
                <a 
                className='iconButton2' 
                href="https://www.linkedin.com/in/cesarezeballos/"
                target='_blank'>
                    <LinkedInIcon fontSize='inherit'/>
                </a>
                
                <a 
                className='iconButton2' 
                href="mailto:cesarezeballos@gmail.com?subject=Contact%20from%20your%20portfolio&body=Hi!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20to%20you.%20Thank%20you.">
                    <EmailIcon fontSize='inherit'/>
                </a>

                <a 
                className='iconButton2' 
                href="https://wa.me/5493517048769/?text=Hi!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20to%20you.%20Thank%20you."
                target='_blank'>
                    <WhatsAppIcon fontSize='inherit' />
                </a>
            </div>

        </div>
    )
}

export default Footer