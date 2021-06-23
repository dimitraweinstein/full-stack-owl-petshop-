import React, { Component } from 'react'
import { getAllOwls } from './fetch-utils.js';
import { Link } from 'react-router-dom';

export default class ListPage extends Component {
    state = {
        owls: []
    }

    componentDidMount = async () => {
        const owls = await getAllOwls();

        this.setState({ owls: owls })
    }

    render() {
        return (
            <div className="owls">
                <p>See Our Owl Inventory!</p>
                {
                    this.state.owls.map(owl => <Link to={`/owls/${owl.id}`}>
                        <div>
                            <p>{owl.name}</p>
                            <p>{owl.note}</p>
                            <p>{owl.habitat}</p>
                            <p>{owl.price}</p>
                            <p>{ owl.endangered }</p>
                        </div>
                    </Link>)
                    
                }
            </div>
        )
    }
}
