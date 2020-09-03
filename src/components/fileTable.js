import React, { Component } from 'react'
import {  Table, Radio ,Space, Modal, Avatar} from 'antd';
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
       data_input:[],
       visible: false,
       picSource: "",
       textSource: ""
    }
}

onChange = e => {
  this.setState({
    targetF: e.target.value,
    data_input: this.state.datas[e.target.value]
  });
};

onUpdate =  (targetFFF) => {
    fetch('http://175.24.65.136:8318/file/uploads',{
        method: "GET"     
    }).then(res => res.text()).then(resVals => {
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
      this.setState({
          datas: result,
          data_input: result[targetFFF]
      })
  
    })    
}

onDeletes = (urls,fileName,targetFF) =>{
  if (window.sessionStorage.getItem("ntId") != 'yss'){
    alert("很抱歉，您没有管理员权限，无法删除当前文件")
   } else{
    fetch(urls,{
        method: "DELETE"     
    }).then(res => res.text()).then(resVals => {
       
      
        this.onUpdate(targetFF)
        alert("删除成功") 
       
      
    }).catch((error)=>{
        alert("删除失败")
    })
  }
}

onCheck = (fileName) => {
    var data = {
        file_names: fileName,
    }

    var path = {
        pathname : "/show/"+data.file_names
    }
    this.props.history.push(path)

}

onAnalyze = (fileName) => {
  fetch("http://175.24.65.136:8318/file/downloadFile?dir=misc&fileName=" + fileName.split('.')[0] + ".txt",{
    method: "GET"     
}).then(res => res.text()).then(resVals => {
  var ppp = ""
  if(resVals == ppp){
    this.setState({
      visible: false,
      picSource: "http://175.24.65.136:8318/file/downloadFile?dir=misc&fileName=" + fileName.split('.')[0] + ".jpg",
      textSource: "当前文件没有分析报告"
    });
  }
  else{
  this.setState({
    visible: true,
    picSource: "http://175.24.65.136:8318/file/downloadFile?dir=misc&fileName=" + fileName.split('.')[0] + ".jpg",
    textSource: resVals
  })}
})
}

handleCancel = () => {
  this.setState({
    visible: false,
  });
};

columns = [
    { title: '文件名', dataIndex: 'name', key: 'name' },
    { title: '操作', dataIndex: '', render: (text, record) => (
      <Space size="middle">
        <a href={this.state.downloadURL+this.state.targetF + "&fileName=" + record.name}>下载</a>
        <a onClick={this.onDeletes.bind(this,this.state.deleteURL+this.state.targetF + "&fileName=" + record.name,record.name,this.state.targetF)}>删除</a>
        <a onClick={this.onCheck.bind(this,this.state.targetF + "&fileName=" + record.name)}>查看</a>
        <a onClick={this.onAnalyze.bind(this,record.name)}> 数据分析</a>
      </Space>
    ) },
    
  ];
componentWillMount(){    
  this.onUpdate("pore_pressure")
}
render(){
    return ( 
    <div >  
    <Radio.Group onChange={this.onChange} style={{float:"center",marginBottom:"20px"}} value={this.state.targetF}>
    <Radio.Button value={"pore_pressure"}>孔压</Radio.Button>
    <Radio.Button value={"flow_rate"}>流速</Radio.Button>
    <Radio.Button value={"seabed_sliding"}>海床滑动变形</Radio.Button>
    <Radio.Button value={"wave"}>波浪</Radio.Button>
    <Radio.Button style={{ display: window.sessionStorage.getItem("ntId")=='yss' ? "" : "none"}} value={"misc"}>数据分析描述文件</Radio.Button>
    </Radio.Group>  
    <Table columns={this.columns} dataSource={this.state.data_input}className="tables"/>
    <Modal
          title="分析报告"
          visible={this.state.visible}
          onCancel={this.handleCancel}>
        <img style={{width:"300px",height:"300px"}} src={this.state.picSource} />
        <p style={{marginTop:"15px"}}>描述:</p>
        <p>{this.state.textSource}</p>
        
        </Modal>
    </div>)
    }
}