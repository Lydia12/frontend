import React, { Component } from "react";
import { Button } from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

class Logout extends Component {



   handleLogout = event => {
    const { history } = this.props;

    history.push('/');
    /* 
    DELETE JWT TOKEN AND SAVE IN STATUS!!!!!!!!
    MAYBE LIKE THIS:
    
    sendLogout = () => {
    localStorage.removeItem('access_token');
    }
    */
    }

}
export default Logout;