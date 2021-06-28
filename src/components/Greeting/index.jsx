import React, { Component } from 'react';
import "./style.css";
export class Greeting extends Component {

    render() { 
        return ( 
            <h1 className='greeting'>{this.props.greeting}</h1>
         );
    }
}