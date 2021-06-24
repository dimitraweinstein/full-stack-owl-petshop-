
import React, { Component } from 'react'
import { getOneOwl, getAllEndangered, updateOwl } from './fetch-utils.js';

export default class DetailPage extends Component {
    state = {
        name: '',
        note: '',
        habitat: '',
        price: 0,
        endangered_id: 1,
        endangered: []
    }

    componentDidMount = async () => {

        const id = this.props.match.params.id;
        const owl = await getOneOwl(id);
        const endangered = await getAllEndangered();

        this.setState({
            name: owl.name,
            note: owl.note,
            habitat: owl.habitat,
            price: owl.price,
            endangered_id: owl.endangered_id,
            endangered: endangered,
        })
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

        await updateOwl({
            name: this.state.name,
            note: this.state.note,
            habitat: this.state.habitat,
            price: this.state.price,
            endangered: this.state.endangered,
            endangered_id: this.state.endangered_id
        });

        this.props.history.push('/listpage')
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Owl Name
                        <input value={this.state.name} onChange={this.handleNameChange}></input>
                    </label>
                    <label>
                        Note / Description
                        <input value={this.state.note} onChange={this.handleNoteChange}></input>
                    </label>
                    <label>
                        Habitat
                        <input value={this.state.habitat} onChange={this.handleHabitatChange}></input>
                    </label>
                    <label>
                        Price
                        <input value={this.state.price} onChange={this.handlePriceChange}></input>
                    </label>
                    <label>
                        Endangered Status:
                        <select selected={this.state.endangered} onChange={this.handleEndangeredChange}>
                            {this.state.endangered.map(endangered =>
                                <option
                                    defaultValue={endangered.id === this.state.endangered_id}
                                    value={endangered.id}>
                                    {endangered.endangered}
                            </option>)}
                        </select>
                    </label>
                    <button>Update!</button>
                </form>
            </div>
        )
    }
}

