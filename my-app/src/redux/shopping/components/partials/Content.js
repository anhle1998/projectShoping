import React from 'react';
import BreadcrumbComponent from './Breadcrumb';
import { Layout } from 'antd';
import '../../index.css';

const { Content } = Layout;

const ContentComponent = (props) => {
    return (
        <>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <BreadcrumbComponent/>
                <div class="container">

                    <div className="site-layout-content">
                        {props.children}
                    </div>
                </div>
            </Content>
        </>
    )
}
export default React.memo(ContentComponent);