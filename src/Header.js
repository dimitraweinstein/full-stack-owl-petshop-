import './Header.css';
import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
        <header>
                <div className="header">
                    <h2>Dubs' Exotic Pet Shop</h2>
                    <Route>
                        <NavLink className="nav-links" to="/">Home</NavLink>      
                        <NavLink className="nav-links" to="/createpage">Create An Owl!</NavLink>      
                        <NavLink className="nav-links" to="/listpage">List of Owls</NavLink>      
                    </Route>
            </div>
        </header>
        )
    }
}
