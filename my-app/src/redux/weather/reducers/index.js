import { combineReducers } from 'redux';
import  weatherReducer  from './slice-weather';

const rootReducer = combineReducers({
    weather: weatherReducer
});
export default rootReducer;