import { createSelector } from "reselect";

const cartState = state => state.cart;

export const getLoadingCart = createSelector(
    cartState,
    state => state.loadingCart
)

export const getAllDataFromCart = createSelector(
    cartState,
    state => state.dataCart
)
export const countDataCart = createSelector(
    getAllDataFromCart,
    item => item.length
)
export const getTotalMoneyCart = createSelector(
    getAllDataFromCart,
    data => data.length > 0 ? data.map(item => parseFloat(item.price)*parseFloat(item.qty)).reduce((prev,next) => prev + next) : 0 
);
export const getStateErrorsCart = createSelector(
    cartState,
    state => state.errorCart
)