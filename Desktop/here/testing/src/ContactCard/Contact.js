import { Component } from "react";
import PropTypes from 'prop-types';

import React from 'react'

class Contact extends React.Component{
    render()
    {   
        return (
            <div className = "contactList"> 
                <p>Name: {this.props.name} </p>
                <p>Mobile Number: {this.props.mn}</p>
                <p>Work Phone: {this.props.wp}</p>
                <p>Email: {this.props.email}</p>
            </div>
        );
    } 
}

export default Contact;

