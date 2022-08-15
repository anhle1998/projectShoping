import { call, put, takeEvery } from 'redux-saga/effects';
import { actionDetail } from '../reducers/DetailSlice';
import { REQUEST_GET_DETAIL_PRODUCT } from './ActionSaga';
import { ApiServices } from '../services/ApiService';

function* detailPdSaga({id}){
    try{
        yield put(actionDetail.startGetLoadingDetail(true));
        const dataDetail = yield call(ApiServices.getDetailProductById, id)
        if (dataDetail !== null && !dataDetail.hasOwnProperty('status')){
            // co du liru tra ve cho sp
            yield put(actionDetail.getDetailProductSuccess(dataDetail));

        } else{
            yield put(actionDetail.getDetailProductFailure({
                // khong co du lieu tra ve cho sp
                cod: 404,
                mess: 'not found data'
            }));
        }
    } catch(err){
        yield put(actionDetail.getDetailProductFailure({
            // khong co du lieu tra ve cho sp
            cod: 500,
            mess: err
        }));

    } finally{
        yield put(actionDetail.startGetLoadingDetail(false));

    }
}
// watcher saga
export function* watchDetailSaga(){
    yield takeEvery(REQUEST_GET_DETAIL_PRODUCT, detailPdSaga);
}