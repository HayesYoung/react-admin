import './index.scss';
import { useState } from 'react';
import renderRoutes from '../../components/renderRoutes'
import Side from './side';
import Head from './head'

import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;


export default function Index(props, state) {

    const { route } = props;

    const [isSwitch, setSwitch] = useState(true)

    const toggleform = () => {
        setSwitch(!isSwitch);
    }
    console.log(route);
    return (
        <div className="main-wrap">
            <Layout>
                <Sider className="side"><Side></Side></Sider>
                <Layout>
                    <Header className="head"><Head></Head></Header>
                    <Content>
                        {renderRoutes(route.children)}
                    </Content>
                </Layout>
            </Layout>

        </div>
    );
}

