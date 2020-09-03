import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Table, Radio } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, LineChartOutlined,AreaChartOutlined,EnvironmentFilled } from '@ant-design/icons';
import './arcPage.css'
import 'antd/dist/antd.css'; 
import Uploadss from './uploadFile'
import FileTable from './fileTable'
import GisPage from './gisMapper'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export default class ArgMainPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
       value: 1,
       targetFolder:"",
       datas:[],
       contents: [<Uploadss/>,
       <Content className="site-layout-background"/> ,
        <FileTable history={this.props.history}/>,
        <Content className="shuishen"/>,
        <Content className="zuankong"/>,
        <Content className="xianchang"/>,
        <Content className="gongchengdizhipoumian"/>,
        <GisPage fileName="http://175.24.65.136:8318/files/研究区经纬度加深度.csv" className="gis"/>
      ,]
    }
}

handleChanges = (value, key) => {
  this.setState({
      value: value,
  })
}

logout = () => {
  window.sessionStorage.removeItem("ntId")
  window.location.href = "http://175.24.65.136/GIS"
}
render(){
    return (
  <Layout style={{height: "100%",width:"100%",position:"absolute"}}>
    <Header className="header" style={{backgroundColor:""}}>
      <div className="logo" />
      <Menu theme="dark" style={{backgroundColor:""}} mode="horizontal" defaultSelectedKeys="">
      <Menu.Item onClick={this.handleChanges.bind(this,1)} style={{fontSize:"large"}}>海底滑坡监测预警系统</Menu.Item>
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
            <Menu.Item onClick={this.handleChanges.bind(this,3)}>水深测量成果图</Menu.Item>
            <Menu.Item onClick={this.handleChanges.bind(this,5)}>地貌图</Menu.Item>
            <Menu.Item onClick={this.handleChanges.bind(this,4)}>钻孔图</Menu.Item>
            <Menu.Item onClick={this.handleChanges.bind(this,6)}>工程地质剖面图</Menu.Item>
          </SubMenu>
          <Menu.Item defaultSelectedKeys="" icon={<LaptopOutlined />} onClick={this.handleChanges.bind(this,2)}>
          数据展示
          </Menu.Item>
          {/* <SubMenu defaultSelectedKeys="" icon={<LineChartOutlined />} title="数据分析">
            
          </SubMenu> */}
          <Menu.Item defaultSelectedKeys="" onClick={this.handleChanges.bind(this,7)} icon={<NotificationOutlined />}>
          预警信息发布
          </Menu.Item>
          <Menu.Item key="5" 
          onClick={this.handleChanges.bind(this,0)}
          style={{display: window.sessionStorage.getItem("ntId")=='yss' ? "" : "none"}}
          >
            上传文件
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '20px 24px 24px', height:"auto",width:"100%"}}>
        
       
        {this.state.contents[this.state.value]}
      </Layout>
    </Layout>
  </Layout>
)
        }
        }