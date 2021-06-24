import React, { Component } from 'react'
import { createOwl } from './fetch-utils.js';

export default class CreatePage extends Component {
    
    state = {
        name: '',
        note: '',
        habitat: '',
        price: 0,
        endangered_id: 1        
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleNoteChange = e => {
        this.setState({ note: e.target.value });
    }

    handleHabitatChange = e => {
        this.setState({ habitat: e.target.value });
    }

    handlePriceChange = e => {
        this.setState({ price: e.target.value });
    }

    handleEndangeredChange = e => {
        this.setState({ endangered_id: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createOwl({
            name: this.state.name,
            note: this.state.note,
            habitat: this.state.habitat,
            price: this.state.price,
            endangered: this.state.endangered_id
        });

        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Owl Name
                        <input onChange={this.handleNameChange}></input>
                    </label>
                    <label>
                        Note / Description
                        <input onChange={this.handleNoteChange}></input>
                    </label>
                    <label>
                        Habitat
                        <input onChange={this.handleHabitatChange}></input>
                    </label>
                    <label>
                        Price
                        <input onChange={this.handlePriceChange}></input>
                    </label>
                    <label>
                        Endangered Status:
                        <select onChange={this.handleEndangeredChange}>
                            <option value="1">Critical</option>
                            <option value="2">Moderate</option>
                            <option value="3">None</option>
                        </select>
                    </label>
                    <button>Create!</button>
                </form>
            </div>
        )
    }
}

