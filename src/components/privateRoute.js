import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: window.sessionStorage.getItem("ntId")=="yss" | window.sessionStorage.getItem("ntId")=="wanghao" ? true: false
        }
    }

    componentWillMount() {
        if(!this.state.isAuthenticated){
            const {history} = this.props;
            setTimeout(() => {
                history.replace("/login");
            }, 1000)
        }
    }

    render() {
        let { component: Component, ...rest} = this.props;
        return  this.state.isAuthenticated ? 
        (<Route {...rest} render={(props) => ( <Component {...props} /> 
            )}/> ) : (<p style = {{"width": "100%", "textAlign": "center", "fontSize": "20px", "lineHeight": "50px"}}>Please Login</p>)

    }
}

export default withRouter(PrivateRoute);