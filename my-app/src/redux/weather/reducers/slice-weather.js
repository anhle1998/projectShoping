import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    loading: false,
    weathers: {},
    error: null
}

const sliceWeather = createSlice({
    name: 'wether',
    initialState,
    reducers: {
        // dinh nghia actions cua saga
        
        startSearchData(state, action){
            state.loading = action.payload;
        },
        finishedSearchData(state, action){
            state.loading= action.payload
        },
        getDataWeatherSuccess(state, action){
            state.weathers = action.payload;
            state.error = null;
        },
        getDataWeatherFail(state, action){
            state.weathers = {};
            state.error = action.payload;
        }
    }
})
export const {
    startSearchData,
    finishedSearchData,
    getDataWeatherFail,
    getDataWeatherSuccess
}= sliceWeather.actions;
export default sliceWeather.reducer;
