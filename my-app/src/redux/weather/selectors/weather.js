import { createSelector } from 'reselect';

// state weather
const stateWeather = state => state.weather;

// get state reducer
export const getLoadingState = createSelector(
    stateWeather,
    state => state.loading
)
export const getAllDataWeatherState = createSelector(
    stateWeather,
    state => state.weathers
) 
export const getMainDataWeather = createSelector(
    getAllDataWeatherState,
    data => {
        let result = {};
        if(data.hasOwnProperty('main')){
            result.temp = data.main.temp;
            result.humidity = data.main.humidity;
        }
        if(data.hasOwnProperty('weather') && data['weather'].length > 0){
            result.main         = data['weather'][0]['main'];
            result.description  = data['weather'][0]['description'];
            result.icon         = data['weather'][0]['icon'];
        } 
        return result;
    }
       
)