

import React, { Component ,Button} from 'react'
import 'antd/dist/antd.css'; 
import FileViewer from 'react-file-viewer';

export default class FileShow extends Component {
  constructor(props){
    super(props)
    const file_name = "http://175.24.65.136:8318/file/downloadFile?dir=" + this.props.match.params.file_names;
    const type = this.props.match.params.file_names.split(".")[1]
    
    this.state = {
        file: file_name,
        type: type
    }
}

  render() {
    return (
      <div style={{zIndex:"9999",height:"800px"}}>
      <FileViewer
        fileType={this.state.type}
        filePath={this.state.file}
        />
        </div>
    );
  }

}