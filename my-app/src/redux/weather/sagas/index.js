import { all, call } from "redux-saga/effects";
import { watchWeatherSaga } from "./wether";

export default function* rootSaga(){
    yield all([
        call(watchWeatherSaga),
        // con cac saga khac thi call tiep o day
    ]);
}