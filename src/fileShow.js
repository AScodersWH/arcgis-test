import {SpreadSheets} from '@grapecity/spread-sheets-react';

import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css';

import React, { Component } from 'react'
import 'antd/dist/antd.css'; 
import FileViewer from 'react-file-viewer';
import file from './components/planetEarth/good.csv'
const type = 'csv'

export default class FileShow extends Component {
  render() {
    return (
      <div style={{zIndex:"9999",height:"800px"}}>
      <FileViewer
        fileType={type}
        filePath={file}
        />
        </div>
    );
  }

}