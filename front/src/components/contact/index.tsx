'use client'
import { setContactState } from "@/redux/slice";
import { RootState } from "@/redux/store";
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from '@mui/icons-material/Close';
import { CustomInput } from "../customInput";
import { IContact } from "@/utils/interfaces";

// icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Contact: React.FC = () => {
    const contactRef = useRef<HTMLDivElement>(null)
    const [data, setData] = useState<IContact>({} as IContact)

    const dispatch = useDispatch();
    const showContact = useSelector((state: RootState) => state.global.contactState)
    
    const handleClose = () => {
        dispatch(setContactState());
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
                handleClose();
            }            
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [contactRef]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = () => {
        console.log(data)
    }

    const handleCancel = () => {
        setData({} as IContact)
        handleClose()
    }

    return (
        <div>
            {
                showContact && 

            <div className="fixed bottom-0 z-50 w-full h-full grid grid-cols-3 backdrop-blur-sm bg-opacity-20 bg-darkGreen">
                <div className="col-span-2"></div>
                <div ref={contactRef} className="relative left-0 w-full h-full rounded-l-3xl bg-lightBlue p-6 flex flex-col items-start">
                    <button onClick={handleClose} className="iconButton2"> 
                        <CloseIcon fontSize="inherit"/>
                    </button>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full p-9">
                        <p className="h3 text-white">Contact Me</p>
                        <CustomInput label="Name" id="name" name="name" size="small" fullWidth onChange={handleChange}/>
                        <CustomInput label="Email" id="email" name="email" size="small" fullWidth onChange={handleChange}/>
                        <CustomInput label="Message" id="message" name="message" multiline rows={4} size="small" fullWidth onChange={handleChange}/>
                        <div className="flex flex-row gap-4 mt-2 items-center">
                            <button className="buttonPrimary" type="submit">Send</button>
                            <p className="body text-white">Thanks for your message!</p>
                        </div>
                    </form>
                    <div className="flex flex-col gap-1 w-full px-9">
                        <p className="body text-white flex flex-row gap-1 items-center"><LinkedInIcon fontSize="inherit" className="text-lightGreen"/>/cesarzeballos</p>
                        <p className="body text-white flex flex-row gap-1 items-center"><WhatsAppIcon fontSize="inherit" className="text-lightGreen"/>+549 351 7048769</p>
                        <p className="body text-white flex flex-row gap-1 items-center"><EmailIcon fontSize="inherit" className="text-lightGreen"/>cesarezeballos@gmail.com</p>

                    </div>
                </div>
            </div>
            }
        </div> 
    )
}