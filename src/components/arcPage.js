import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, LineChartOutlined,AreaChartOutlined,EnvironmentFilled } from '@ant-design/icons';
import './arcPage.css'
import 'antd/dist/antd.css'; 
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default class ArgMainPage extends React.Component {
render(){
    return (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="0" style={{position:"relative",right:"44%"}}>海底滑坡监测预警系统</Menu.Item>
        <Menu.Item key="1">数据</Menu.Item>
        <Menu.Item key="2">图片</Menu.Item>

      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub0']}
          style={{ height: '100%', borderRight: 0 }}
        >
            <SubMenu key="sub0" icon={<EnvironmentFilled />} title="研究区概况"/>
 
          <SubMenu key="sub1" icon={<AreaChartOutlined />}  title="地质环境要素">
            <Menu.Item key="1">水深测量成果图</Menu.Item>
            <Menu.Item key="2">地貌图</Menu.Item>
            <Menu.Item key="3">钻孔图</Menu.Item>
            <Menu.Item key="4">经纬度</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="数据展示">
            <Menu.Item key="5">孔压</Menu.Item>
            <Menu.Item key="6">流速</Menu.Item>
            <Menu.Item key="7">海床滑动变形</Menu.Item>
            <Menu.Item key="8">波浪</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<LineChartOutlined />} title="数据分析">
            
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="预警信息发布">
          
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 680,
            
          }}
        >
        </Content>
      </Layout>
    </Layout>
  </Layout>
)
        }
        }