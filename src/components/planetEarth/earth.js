import './earth.css';
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export default class Earth extends React.Component{
    onFinish = values => {
        window.event.preventDefault()
        window.sessionStorage.setItem('ntId',values.username)
        window.location.href="http://175.24.65.136/GIS"
        };
render(){
        return (
    <div class="containers"> 
        <div class="earth"/>
               
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                style={{width:"20%",position:"absolute",left:"40%",top:"42%",opacity:"0.75"}}
                onFinish={this.onFinish}>
                
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}>
                    <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"/>
                </Form.Item>
               

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href=""> register now!</a>
            </Form.Item>
        </Form>
    </div>
            )
        }
    }