import { IContact } from "@/utils/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const setContact = createAsyncThunk('global/setContactState', async (data: IContact) => {
    console.log(data)
})