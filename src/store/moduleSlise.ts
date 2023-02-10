import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
    isActive:boolean
}

const initialState:State = {
    isActive:false,
}

const moduleSlice = createSlice({
    name:'module',
    initialState,
    reducers:{
        setActive(state,action:PayloadAction<boolean>){
            state.isActive = action.payload
        },
    }
})

export const {setActive,} = moduleSlice.actions 
export default moduleSlice.reducer