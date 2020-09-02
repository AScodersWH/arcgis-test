import { Upload, message } from 'antd';
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { InboxOutlined } from '@ant-design/icons';
import { Radio } from 'antd';
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'ttp://175.24.65.136:8318/file/uploadFile',
  onChange(info) {
    const { status } = info;
    if (status !== 'uploading') {
    }
    if (status === 'done') {
    message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
export default class Uploadss extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetFolder: "pore_pressure"
        }
    }

    onChange = e => {
        props.action = "http://175.24.65.136:8318/file/uploadFile?dir=" + e.target.value
        this.setState({
          targetFolder: e.target.value,
        });
      };
    render(){
return(
    <div>
    <Radio.Group onChange={this.onChange} style={{marginBottom:"20px"}} value={this.state.targetFolder}>
    <Radio  value={"pore_pressure"}>孔压</Radio>
    <Radio value={"flow_rate"}>流速</Radio>
    <Radio value={"seabed_sliding"}>海床滑动变形</Radio>
    <Radio value={"wave"}>波浪</Radio>
    <Radio value={"misc"}>数据分析描述文件</Radio>
  </Radio.Group>
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">点击上传或拖拽文件至此处上传</p>
    <p className="ant-upload-hint">
      支持多文件上传，在上传前请在左上方选择上传数据的类型，否则上传将会失败
    </p>
  </Dragger>
  </div>
)
    }
}