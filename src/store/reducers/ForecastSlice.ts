import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface WeathState {
    city: string,
    days: number,
    degrees: boolean,
    isLoading: boolean,
    error: string
}

const initialState: WeathState = {
    city: '',
    days: 7,
    degrees: true,
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
        },
        degrees(state, action: PayloadAction<boolean>){
            state.degrees = action.payload
        }
    }
})

export const weatherReducer =  weatherSlice.reducer
export const weatherAction = weatherSlice.actions