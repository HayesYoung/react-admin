import './index.scss';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

// 登录API
import { Login, LoginToken } from '../../api/account'

// session 保存
import { getToken, setToken } from '../../utils/session';

export default function LoginForm(props) {
    const { toggleForm } = props;
    let history = useHistory();

    // 表单初始数据
    const initialValues = {
        remember: true,
        username: "admin@gmail.com",
        password: "123456"
    }

    const success = () => {
        message.success('登陆成功', 1);
    };

    const onFinish = (values) => {
        if (getToken != null) {
            LoginToken(values).then((res) => {
                success()
                history.push("/index")
            }).catch((err) => {
                console.log(err);
                console.log('失败');
            })

        } else {
            Login(values).then((res) => {
                console.log('成功');
                // TODO Jump routing

                setToken(res.token);
            }).catch((err) => {
                console.log(err);
                console.log('失败');
            })
        }
    };


    return (
        <div className="login-wrap">

            <Form
                name="normal_login"
                className="login-form"
                initialValues={initialValues}
                // initialValues={{ remember: true }, {"username": "admin@gmail.com"},{"password": "123456"} }
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={
                        [
                            { required: true, message: '请输入您的用户名!' },
                            { type: 'email', message: '格式不正确, 请输入电话, 邮箱, 昵称' }
                        ]
                    }
                >
                    <Input
                        // defaultValue="admin@gmail.com"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="用户名"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入您的密码' }]}
                >
                    <Input
                        // defaultValue="123456"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"

                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        忘记密码
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登陆
                    </Button>
                    <span onClick={toggleForm}>注册</span>
                </Form.Item>
            </Form>

        </div>
    );
}
