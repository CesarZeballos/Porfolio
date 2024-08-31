import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer: React.FC = () => {

    return (
        <div className="px-marginX py-marginY flex flex-row justify-between items-center">
            <h1 className="body text-white">Cesar E. Zeballos, september 2024</h1>
            <div className="flex flex-row gap-4 items-center">
                <p className="body text-white">Connect with me</p>
                <button className='iconButton2'><LinkedInIcon fontSize='inherit'/></button>
                <button className='iconButton2'><EmailIcon fontSize='inherit'/></button>
                <button className='iconButton2'><WhatsAppIcon fontSize='inherit' /></button>
            </div>

        </div>
    )
}

export default Footer