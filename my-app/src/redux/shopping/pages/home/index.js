import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestGetProducts, addProductToCart } from '../../redux/sagas/ActionSaga';
import * as selectorHome from '../../redux/selectors/HomeSelector';
import * as selectorCart from '../../redux/selectors/CartSelector';
import { createStructuredSelector } from 'reselect';
import LayoutComponent from '../../components/Layout';
import { Row, Col, Skeleton, Card, Button  } from 'antd';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import '../../index.css';
import {
    ShoppingCartOutlined
  } from '@ant-design/icons';

const { Meta } = Card;

const HomePage = () => {
    const { loading, errors, products, loadingCart} = useSelector(createStructuredSelector({
        loading: selectorHome.getLoadingHome,
        errors: selectorHome.getErrorHome,
        products: selectorHome.getDataProductState,
        loadingCart: selectorCart.getLoadingCart
    }));

    const dispatch =  useDispatch();
    useEffect(() => {
        dispatch(requestGetProducts());
    },[dispatch]);

    const addCart = id => {
        dispatch(addProductToCart(id, 1));
    }

    if(loading){
        return (
            <LayoutComponent>
                <Skeleton active/>
                
            </LayoutComponent>
        )
    }
    if(errors !== null){
        return (
            <LayoutComponent>
                
                <h5>not found data</h5>
            </LayoutComponent>
        )
    }
    
    return (
        <LayoutComponent>
           
            <Row>
                {products.map((item,index) => (
                    <Col span={6} key={index}>
                        <Link to={`/${slugify(item.title)}-${slugify(item.id)}`}>
                            <Card
                                hoverable
                                bordered={false}
                                style={{
                                width: 240,
                                
                                }}
                                cover={<img alt={item.title} src={item.image} />}
                            >   
                                    <Meta title={item.title}  />
                                    <p class="price">{item.price} $</p>
                            </Card>
                        </Link>
                        <Button className="btn-add"
                                type='primary'
                                disabled={loadingCart}
                                onClick={() => addCart(item.id)}
                                ><ShoppingCartOutlined /></Button>
                                
                
                    </Col>
                ))}
                
            </Row>
         
            
                
        </LayoutComponent>
    )

    

    
}
export default React.memo(HomePage);
