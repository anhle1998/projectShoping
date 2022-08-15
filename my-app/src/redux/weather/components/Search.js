import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestSearchData } from '../actions/weather';
import { getLoadingState }  from '../selectors/weather';
import { Row, Col, Input } from 'antd';
import { createStructuredSelector } from 'reselect';


const { Search } = Input;

const SearchWeather = () => {
    const { loading } = useSelector(createStructuredSelector({
        loading: getLoadingState,
        //sau nay co nhieu state khac can lay thi khai bao o day
    }));
    const dispatch = useDispatch();
    return(
        <Row style={{margin: '20px 0px'}}>
            <Col span={12} offset={6}>
            <Search 
            placeholder="name of city" 
            enterButton 
            loading={loading}
            onSearch={val => dispatch(requestSearchData(val))}
            />
                
            </Col>
        </Row>
    )

}
export default React.memo(SearchWeather)