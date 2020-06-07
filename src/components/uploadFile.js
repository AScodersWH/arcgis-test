import { Upload, message } from 'antd';
import React, { Component } from 'react'
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'http://175.24.65.136:8318/file/uploadFile',
  onChange(info) {
    console.log("niu bi")
    console.log(info.file, info.fileList);
    const { status } = info;
    if (status !== 'uploading') {
        console.log("niu bi")
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
    message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
export default class Uploadss extends React.Component {
render(){
    return(
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>
)
    }
}