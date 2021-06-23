import React, { Component } from 'react'
// import { getAllOwls } from './fetch-utils.js';
// import { Link } from 'react-router-dom';

export default class ListPage extends Component {
    state = {
        owls: []
    }

    // componentDidMount = async () => {
    //     const owls = await getAllOwls();

    //     this.setState({ owls: owls })
    // }

    render() {
        return (
            <div>
                <p>List Page!</p>
            </div>
        )
    }
}
