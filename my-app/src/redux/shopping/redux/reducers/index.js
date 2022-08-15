import { combineReducers } from 'redux';
import homeReducer from './HomeSlice';
import cartReducer from './CartSlice';
import { persistReducer } from 'redux-persist';
import { createRouterReducer } from '@lagunovsky/redux-react-router';
import storage from 'redux-persist/lib/storage';
import { browserHistory } from '../history';
import detailReducer from './DetailSlice';

const configCartPersistReducer = {
    key: 'CartPersistReducer',
    storage,
    whitelist: ['dataCart']
}
const rootReducer = combineReducers({
    home: homeReducer,// co the luu hoac k vao redux persist
    cart: persistReducer( configCartPersistReducer, cartReducer),
    router: createRouterReducer(browserHistory),// khong bh luu roiter nay vao trong redux persist
    detail: detailReducer,
});
export default rootReducer;