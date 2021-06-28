import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import './style.css'
export class Social extends Component {
    state = {}
    render() {
        return (
            <nav>
                <ul className='socialMenu'>
                    <li className='socialMenu--item'>
                        <a className='socialMenu--item__link' target='_blank' rel="norefferer" href="https://www.facebook.com/matheus.takasaki.antunes/">
                            <FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon>
                        </a>
                    </li>
                    <li className='socialMenu--item'>
                        <a className='socialMenu--item__link' target='_blank' rel='norefferer' href="https://www.linkedin.com/in/matheus-takasaki-antunes-b522591a0/">
                            <FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon>
                        </a>
                    </li>
                    <li className='socialMenu--item'>
                        <a className='socialMenu--item__link' target='_blank' rel='norefferer' href="https://www.instagram.com/o_taaka/">
                            <FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon>
                        </a>
                    </li>
                    <li className='socialMenu--item'>
                        <a className='socialMenu--item__link' target='_blank' rel='norefferer' href="https://wa.me/5541997957911">
                            <FontAwesomeIcon icon={faWhatsapp} ></FontAwesomeIcon>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}