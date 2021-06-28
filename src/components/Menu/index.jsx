import React, { Component } from 'react';
import "./style.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export class Menu extends Component {
    render() {
        return (
            
            <ul className='mainMenu' key='mainMenu'>
                <li className='mainMenu--item'><AnchorLink className='mainMenu--item__link' href="#About">About</AnchorLink></li>
                <li className='mainMenu--item'><AnchorLink className='mainMenu--item__link' href="#Skills">Skills</AnchorLink></li>
                <li className='mainMenu--item'><AnchorLink className='mainMenu--item__link' href="#Contact" >Contact</AnchorLink></li>
            </ul>
        );
    }
}