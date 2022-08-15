import React from "react";
import { useSelector } from "react-redux";
import { getMainDataWeather } from '../selectors/weather';
import { Row, Col } from "antd";
import { helpers } from '../helpers/common';


const InfoWeather = () => {
    const dataWeather = useSelector(getMainDataWeather);
    if(helpers.isEmptyObject(dataWeather)){
        return null;
    }
    return(
        <Row style={{margin: '20px 0px'}}>
            <Col span={20} offset={2}>
                <p>Nhiet Do: {dataWeather.temp}</p>
                <p>Do Am: {dataWeather.humidity}</p>
                <p>Mieu Ta: {dataWeather.description}</p>
            </Col>
        </Row>
    )
}
export default React.memo(InfoWeather);
