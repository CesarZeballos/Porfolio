import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    contactState: false
}

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setContactState(state) {
            state.contactState = !state.contactState
        }
    }
})

export const { setContactState } = globalSlice.actions
export default globalSlice.reducer