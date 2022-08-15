// dinh nghia ten hanh dong
//co 2 loai hanh dong chinh(action)
// 1 laf action tu he thong hay ty user tu he thong
//2 la action tu middle redux saga (nhan vao action(1) va tra ve action khac va cac action do dc dispatch vao store)


//export const SEARCH_DATA_REQUEST = Symbol('SEARCH_DATA_REQUEST');
export const SEARCH_DATA_REQUEST = 'SEARCH_DATA_REQUEST';


// action cua saga( nhan action SEARCH_DATA_REQUEST)
export const START_SEARCH_DATA = Symbol('START_SEARCH_DATA');
export const GET_DATA_WEATHER_SUCCESS = Symbol('GET_DATA_WEATHER_SUCCESS');
export const GET_DATA_WEATHER_FAIL = Symbol('GET_DATA_WEATHER_FAIL');
export const FINISHED_SEARCH_DATA = Symbol('FINISHED_SEARCH_DATA');