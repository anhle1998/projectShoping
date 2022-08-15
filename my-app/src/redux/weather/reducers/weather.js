import * as typeActions from '../actions/types';

const initialState = {
    loading: false,
    weathers: {},
    error: null
}
export const weatherReducer = (state = initialState, action) => {
    switch (action.type){
        case typeActions.START_SEARCH_DATA:
            return{
                ...state,
                loading: action.start
            }
        case typeActions.FINISHED_SEARCH_DATA:
            return{
                ...state,
                loading: action.finish
            }
        case typeActions.GET_DATA_WEATHER_SUCCESS:
            return{
                ...state,
                weathers: action.weather,
                error: null
            }
        case typeActions.GET_DATA_WEATHER_FAIL:
            return{
                ...state,
                error: action.error,
                weathers: {}
            }
        default:
            return state;
    }
}