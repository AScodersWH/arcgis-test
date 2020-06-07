import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, LineChartOutlined,AreaChartOutlined,EnvironmentFilled } from '@ant-design/icons';
import './arcPage.css'
import 'antd/dist/antd.css'; 
import Uploadss from './uploadFile'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default class ArgMainPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
       value: 1,
       contents: [<Uploadss/>,<Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: "100%",
        }}/> ]
    }
}


handleChanges = (value, key) => {
  this.setState({
      value: value
  })
}

logout = () => {
  window.sessionStorage.removeItem("ntId")
  window.location.href = "http://175.24.65.136/"
}

render(){
    return (
  <Layout style={{height: "100%",width:"100%",position:"absolute"}}>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys="">
      <Menu.Item onClick={this.handleChanges.bind(this,1)} style={{fontSize:"large",flat:"left",right:"4%"}}>海底滑坡监测预警系统</Menu.Item>
          <SubMenu defaultSelectedKeys="" icon={<UserOutlined/>} style={{float:"right",left:"3%"}}>
            <Menu.Item >{window.sessionStorage.getItem("ntId")}</Menu.Item>
            <Menu.Item onClick={this.logout}>注销</Menu.Item>
          </SubMenu>

      </Menu>
    </Header>
    <Layout>
      <Sider width={160} style={{overflow:"scorll",height:"100%"}} className="site-layout-background">
        <Menu defaultSelectedKeys=""
          mode="vertical"
          style={{ height: '100%', borderRight: 0 ,backgroundColor:"#F8FBFD"}}
          value={this.state.contentNum}
        >
            <Menu.Item icon={<EnvironmentFilled />} onClick={this.handleChanges.bind(this,1)}>
            研究区概况
            </Menu.Item>
          <SubMenu defaultSelectedKeys="" icon={<AreaChartOutlined />}  title="地质环境要素">
            <Menu.Item>水深测量成果图</Menu.Item>
            <Menu.Item>地貌图</Menu.Item>
            <Menu.Item>钻孔图</Menu.Item>
            <Menu.Item>经纬度</Menu.Item>
          </SubMenu>
          <SubMenu defaultSelectedKeys="" icon={<LaptopOutlined />}  title="数据展示">
            <Menu.Item>孔压</Menu.Item>
            <Menu.Item>流速</Menu.Item>
            <Menu.Item>海床滑动变形</Menu.Item>
            <Menu.Item>波浪</Menu.Item>
          </SubMenu>
          <SubMenu defaultSelectedKeys="" icon={<LineChartOutlined />} title="数据分析">
            
          </SubMenu>
          <SubMenu defaultSelectedKeys="" icon={<NotificationOutlined />} title="预警信息发布">
          
          </SubMenu>
          <Menu.Item key="5" onClick={this.handleChanges.bind(this,0)}>
            上传文件
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '20px 24px 24px', height:"100%"}}>
        
       
        {this.state.contents[this.state.value]}
      </Layout>
    </Layout>
  </Layout>
)
        }
        }