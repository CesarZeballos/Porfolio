import { IContact } from "@/utils/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const setContact = createAsyncThunk('global/setContactState', async (data: IContact) => {
    const contactData = {
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
        template_params: {
            from_name: data.name,
            from_email: data.email,
            message: data.message
        }
    }
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactData)
    })
    console.log(response)
    return response
})