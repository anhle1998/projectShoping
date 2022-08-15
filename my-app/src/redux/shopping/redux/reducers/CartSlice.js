import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loadingCart: false,
    dataCart: [],
    errorCart: null,
}

const cartSlice = createSlice({
    name: ' cart',
    initialState,
    reducers: {
        startAddProductCart(state, action){
            state.loadingCart = action.payload;
        },
        changeQuanTity(state, action){
            const { id, quantity } = action.payload || { id: 0, quantity: 0}
            // cap nhat lai soluong mua cua sp co id gui len
            const quantityItem = state.dataCart.map(item => {
                return item.id === id ? {...item,qty: quantity} : item;
            });
            if(quantityItem !== undefined){
                state.dataCart = quantityItem;
                state.errorCart = null;
            }
        }
        ,
        removeItemCart(state, action){
            const idItem = action.payload  || 0;
            // xoa bo sp cos id trong gio hang
            // giu lai  cac sp k trung id gui len
            const removeItems = state.dataCart.filter(item => item.id !== idItem);
            if(removeItems !== undefined){
                state.dataCart = removeItems;
                state.errorCart = null;
            }
        }
        ,
        addProductCartSuccess(state, action){
            const infoPd = action.payload.data;// thoong tin chi tiet san pham
            const idPd = infoPd['id'] || 0;// id cua san pham
            const qtyPd = action.payload.qty;
            // kiem tra san pham them vao gio hang da ton tai trong gio hang truoc do hay chua
            
            const findPd = state.dataCart.find(item => item.id === idPd);
            if(findPd === undefined){
                //khong ton tai
                // them luon sp vao gio hang
                // bo sung them truong so luong mua vao du lieu giohang
                infoPd.qty = qtyPd;// mac ding mua 1 sp
                state.dataCart.push(infoPd);
            }
            else{
                // data ton tai
                // cap nhat lai sl mua san pham
                findPd.qty += qtyPd;
                // k cap nhat lai du lieu trong gio hang
            }
            state.errorCart = null;
        },
        addProductCartFailure(state, action){
            state.errorCart = action.payload;
        }

    }
})
export const actionCart = cartSlice.actions;
export default cartSlice.reducer;