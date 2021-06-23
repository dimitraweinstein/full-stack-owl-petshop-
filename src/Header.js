import './Header.css';
import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
        <header>
                <div className="gutter-right logo">
                    <h2>Dubs' Exotic Pet Shop</h2>
                    <Route>
                    <p><NavLink to="/">Home</NavLink></p>
                    <p><NavLink to="/create">Create An Owl!</NavLink></p>
                    <p><NavLink to="/listpage">List of Owls</NavLink></p>
                    <p><NavLink to="/detailpage">Owl Details</NavLink></p>
                        {/* <img src="big-logo.png" alt="logo"/> */}
                    </Route>
            </div>
        </header>
        )
    }
}
