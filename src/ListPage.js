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
                            <li key={1}>{owl.name}</li>
                            <li key={2}>{owl.note}</li>
                            <li key={3}>{owl.price}</li>
                            <li key={4}>{ owl.endangered }</li>
                        </div>
                    </Link>)
                    
                }
            </div>
        )
    }
}
