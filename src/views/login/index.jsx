import './index.scss';
import { useState } from 'react';

import LoginForm from './LoginForm'
import Register from "./Register"

import renderRoutes from '../../components/renderRoutes'


export default function Login(props) {
    const {route} = props;

    const [isSwitch, setSwitch] = useState(true)

    const toggleform = () => {
        setSwitch(!isSwitch);
    }

    return (
        <div className="login-wrap">
            {isSwitch ? <LoginForm toggleForm={toggleform} /> : <Register />}
            {renderRoutes(route.children)}
        </div>
    );
}

{/* <div className="login-container"> */ }