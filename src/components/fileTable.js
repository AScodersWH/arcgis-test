import React, { Component } from 'react'
import {  Table, Radio ,Space} from 'antd';
import 'antd/dist/antd.css'; 


export default class fileTable extends React.Component {
  constructor(props){
    super(props)
    this.state = {
       value: 1,
       downloadURL:"http://175.24.65.136:8318/file/downloadFile?dir=",
       deleteURL:"http://175.24.65.136:8318/file/delete?dir=",
       targetF:"pore_pressure",
       datas:{},
       data_input:[]
    }
}

onChange = e => {
  console.log( e.target.value);
  this.setState({
    targetF: e.target.value,
    data_input: this.state.datas[e.target.value]
  });
};

onUpdate = () => {
    fetch('http://175.24.65.136:8318/file/uploads',{
        method: "GET"     
    }).then(res => res.text()).then(resVals => {
      console.log(resVals)
      let resVal = JSON.parse(resVals)
      let result = {
          pore_pressure:[],
          flow_rate:[],
          seabed_sliding:[],
          wave:[],
          misc:[]
      }
      if (resVal["pore_pressure"]!=null)
      for(let file_name of resVal["pore_pressure"]){
          let single = {"name":file_name}
          result.pore_pressure.unshift(single)
      }
      if (resVal["flow_rate"]!=null)
      for(let file_name of resVal["flow_rate"]){
          let single = {"name":file_name}
          result.flow_rate.unshift(single)
      }
      if (resVal["seabed_sliding"]!=null)
      for(let file_name of resVal["seabed_sliding"]){
          let single = {"name":file_name}
          result.seabed_sliding.unshift(single)
      }
      if (resVal["wave"]!=null)
      for(let file_name of resVal["wave"]){
          let single = {"name":file_name}
          result.wave.unshift(single)
      }
      if (resVal["misc"]!=null){
      for(let file_name of resVal["misc"]){
          let single = {"name":file_name}
          result.misc.unshift(single)
      }}
      console.log(result)
      this.setState({
          datas: result,
          data_input: result.pore_pressure
      })
  
    })    
}

onDeletes = (urls,fileName) =>{
    fetch(urls,{
        method: "DELETE"     
    }).then(res => res.text()).then(resVals => {
        this.onUpdate()
        let targets = this.state.targetF
        alert("删除成功") 
        this.setState({
            targetF: targets
        })
    }).catch((error)=>{
        alert("删除失败")
    })
}
columns = [
    { title: '文件名', dataIndex: 'name', key: 'name' },
    { title: '操作', dataIndex: '', render: (text, record) => (
      <Space size="middle">
        <a href={this.state.downloadURL+this.state.targetF + "&fileName=" + record.name}>下载</a>
        <a onClick={this.onDeletes.bind(this,this.state.deleteURL+this.state.targetF + "&fileName=" + record.name,record.name)}>删除</a>
        <a href="http://175.24.65.136/GIS/#/show">查看</a>
        <a>数据分析</a>
      </Space>
    ) },
    
  ];
componentWillMount(){    
  this.onUpdate()
}
render(){
    return ( 
    <div >  
    <Radio.Group onChange={this.onChange} style={{float:"center"}} value={this.state.targetF}>
    <Radio.Button value={"pore_pressure"}>孔压</Radio.Button>
    <Radio.Button value={"flow_rate"}>流速</Radio.Button>
    <Radio.Button value={"seabed_sliding"}>海床滑动变形</Radio.Button>
    <Radio.Button value={"wave"}>波浪</Radio.Button>
    <Radio.Button value={"misc"}>未分类文件</Radio.Button>
    </Radio.Group>  
    <Table columns={this.columns} dataSource={this.state.data_input}className="tables"/>
    </div>)
    }
}