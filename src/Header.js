import './Header.css';
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
        <header>
            <div className="gutter-right logo">
                <img src="big-logo.png" alt="logo"/>
            </div>
        </header>
        )
    }
}
