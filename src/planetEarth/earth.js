import './earth.css';
import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

export default class Earth extends React.Component{
    handleSubmit = () => {
		window.event.preventDefault()
		let username = document.getElementById("ntId").value
        window.sessionStorage.setItem('ntId',username)
        window.location.href="http://175.24.65.136/"
    }
   
render(){
        return (
            <div class="containers"> 
                <div class="earth"/>
                <Search
                    placeholder="请输入管理员用户名"
                    enterButton="登录"
                    size="large"
                    id="ntId"
                    style={{width:"30%",position:"absolute",top:"50%",left:"35%"}}
                    onSearch={this.handleSubmit}/>
            </div>
            )
        }
    }