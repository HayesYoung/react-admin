import './index.scss';
import { useState } from 'react';

import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;


export default function Head() {

    const [isSwitch, setSwitch] = useState(true)

    const toggleform = () => {
        setSwitch(!isSwitch);
    }
    var a = 1;
    function test () {
        console.log(a);
        // let a = 3;
    }

    return (
        <div className="head-wrap">
            top
            {/* <button onClick={test}>click</button> */}
        </div>
    );
}

