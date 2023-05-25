import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface WeathState {
    city: string,
    days: number,
    isLoading: boolean,
    error: string
}

const initialState: WeathState = {
    city: '',
    days: 7,
    isLoading: false,
    error: ''
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers:{
        weather(state, action: PayloadAction<string>){
          state.city = action.payload
        },
        days(state, action: PayloadAction<number>){
            state.days = action.payload
        }
    }
})

export const weatherReducer =  weatherSlice.reducer
export const weatherAction = weatherSlice.actions