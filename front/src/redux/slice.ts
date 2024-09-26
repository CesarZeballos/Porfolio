import { createSlice } from "@reduxjs/toolkit"
import { setContact } from "./sliceThunk"
import { toast } from "sonner"



const initialState = {
    contactState: false,
    state: 'idle'
}

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setContactState(state) {
            state.contactState = !state.contactState
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setContact.fulfilled, (state) => {
                state.state = 'succeeded'
                toast.success('Thank you for your contact. We will get back to you', {
                    position: 'top-right',
                    duration: 1500
                })
            })
            .addCase(setContact.pending, (state) => {
                state.state = 'loading'
            })
            .addCase(setContact.rejected, (state) => {
                state.state = 'failed'
            })
    }
})

export const { setContactState } = globalSlice.actions
export default globalSlice.reducer