import './index.scss';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

function handleClick(e) {
    console.log('click', e);
}

export default function Side() {

    let history = useHistory();

    const [isSwitch, setSwitch] = useState(true)

    const toggleform = () => {
        setSwitch(!isSwitch);
    }

    const [openKeys, setOpenKeys] = React.useState(['sub1']);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const test = () => {
        console.log(111);
        history.push("/index/123/login");
    }

    return (
        <div className="side-wrap">
            <div className="logo">
                <h1>木易</h1>
            </div>

            <div className="side-menu">
                <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 200 }}>

                    <SubMenu key="sub1" icon={<MailOutlined />} title="Echarts 展示">
                        <Menu.Item key="1" onClick={test}>Option </Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        </div>
    );
}

