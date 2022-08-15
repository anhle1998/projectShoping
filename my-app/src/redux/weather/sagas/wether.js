import { call, put, takeLatest } from 'redux-saga/effects';
//import * as actions from '../actions/weather';
import { SEARCH_DATA_REQUEST } from '../actions/types';
import { startSearchData,
    finishedSearchData,
    getDataWeatherFail,
    getDataWeatherSuccess
} from '../reducers/slice-weather';
import { api } from '../services/weather';


// voi redux saga bat bouoc phai dung generator function
// khong cac function nao khac
// worker saga: xu ly cac cong viec ma actions dispatch vao saga
function* weatherSaga({ city }){
    try {
        // dispatch actions vao store
        yield put(startSearchData(true));// cap ngat state loading trong reducer
        // call api tu services
        const result = yield call(api.getDataWeatherByCityName, city);
        if(result.hasOwnProperty('cod') && result ['cod'] === 200){
            // co du lieu tra ve
            yield put(getDataWeatherSuccess(result));
        } else{
            yield put(getDataWeatherFail({
                cod: 404,
                message: 'not found city',
            }));
        }
    } catch (err){
        yield put(getDataWeatherFail({
            cod: 500,
            message: err,
        }));
    } finally {
        yield put(finishedSearchData(false));
        // dung viec su ly actions vao saga
    }
}
// watcher saga
export function* watchWeatherSaga(){
    // theo do actions goi vao saga
    yield takeLatest(SEARCH_DATA_REQUEST, weatherSaga)
}