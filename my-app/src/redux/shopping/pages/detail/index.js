import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import LayoutComponent from '../../components/Layout';
import { useParams } from "react-router-dom";
import * as detailSelector from '../../redux/selectors/DetaiSelecter';
import { createStructuredSelector } from "reselect";
import { getDetailProduct, addProductToCart } from '../../redux/sagas/ActionSaga';
import { Row, Col, Skeleton, Image, InputNumber, Button } from 'antd';

const DetailPage = () => {
    const [ quantity, setQuantity ] = useState(1);
    const { id } = useParams();
    const { loading, error, detail } = useSelector(createStructuredSelector({
        loading: detailSelector.getLoadingStateDetail,
        error: detailSelector.getErrorStateDetail,
        detail: detailSelector.getDataStateDetail
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailProduct(id))
    }, [id, dispatch]);
    const changeQuanTityCart = ( qty ) => {
        setQuantity(qty);
    }
    const dispatchDetailPdCart = (id, qty ) => {
        if(!isNaN(id) && qty > 0){
            dispatch(addProductToCart(id, qty))
        }
        else{
            alert('vui long nhap so luong mua')
        }
    }

    if(loading){
        return (
            <LayoutComponent>
                <Skeleton active/>
            </LayoutComponent>
        )
    }
    if( error !== null){
        return (
            <LayoutComponent>
                khong co du lieu
            </LayoutComponent>
        )
    }
    return(
        <LayoutComponent  >
            
      
            <Row >
                <Col className="img-hover" span={4}>
                <Image src={detail.image}/>
                </Col>
                <Col className="info-product" span={20} style={{padding: "32px"}}>
                    <h2>{detail.title}</h2>
                    <p class="price-deail">Price: {detail.price} $</p>
                    <p>Chi Tiet: {detail.description}</p>
                    <InputNumber 
                        min={1} max={10} 
                        defaultValue={2}
                        onChange={val => changeQuanTityCart(val)}
                    />
                    <Button className="btn-detail"
                    type="primary"
                    onClick={() => dispatch(dispatchDetailPdCart(id, quantity))}
                    >Add Cart</Button>
                </Col>
            </Row>
           
        </LayoutComponent>
    )
}
export default React.memo(DetailPage);