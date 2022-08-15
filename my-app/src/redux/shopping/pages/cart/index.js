import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDataFromCart, getTotalMoneyCart } from '../../redux/selectors/CartSelector';
import { createStructuredSelector } from 'reselect';
import LayoutComponent from '../../components/Layout';
import { Row, Col, Image, InputNumber, Button } from 'antd';
import { actionCart } from '../../redux/reducers/CartSlice';
import '../../index.css';
const CartPage = () => {
    const { carts, totalMoney } = useSelector(createStructuredSelector({
        carts: getAllDataFromCart,
        totalMoney: getTotalMoneyCart
    }));
    const dispatch = useDispatch();
    const deleteItemCart = id => {
        dispatch(actionCart.removeItemCart(id));
    }
    const changeItemCart = (data) => {
        dispatch(actionCart.changeQuanTity(data))
    }
    if(carts.length === 0){
        return (
            <LayoutComponent>
                <h5>k co sp</h5>
            </LayoutComponent>
        )
    }

    return (
        <LayoutComponent>
            
            {carts.map((item,index) => (
                <Row style={{margin: '20px 0px', borderBottom: '1px solid #ccc'}} key={index}>
                    <Col span={4} className="img-hover" >
                        <Image src={item.image}/>
                    </Col>
                    <Col  className="info-product" span={20} style={{padding: '30px'}}>
                        <h2>{item.title}</h2>
                        <p>Price: {item.price}$</p>
                        <InputNumber 
                        min={1} max={10} 
                        value={item.qty}
                        onChange={(val) => changeItemCart({id: item.id, quantity: val})}
                        />
                        <Button className="delete-product"
                        type='dashed'
                        danger 
                        style={{marginLeft:'10px'}}
                        onClick={() => deleteItemCart(item.id)}
                        >Delete</Button>
                        <br/>
                        <p>Money: {parseFloat(item.price)*item.qty}</p>
                    </Col>
                </Row>  
            ))}
            <Row>
                    <Col span={24}>Tổng tiền : {totalMoney}$</Col>
                </Row>
            
        </LayoutComponent>
    )
}
export default React.memo(CartPage);