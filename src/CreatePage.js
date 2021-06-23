import React, { Component } from 'react'

export default class CreatePage extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        Owl Name
                        <input type="text"></input>
                    </label>
                    <label>
                        Note / Description
                        <input type="text"></input>
                    </label>
                    <label>
                        Habitat
                        <input type="text"></input>
                    </label>
                    <label>
                        Price
                        <input type="text"></input>
                    </label>
                        Endangered Status:
                        <select>
                            <option value="Critical">Critical</option>
                            <option value="Moderate">Moderate</option>
                            <option value="None">None</option>
                        </select>
                    <button type="submit">Create!</button>
                </form>
            </div>
        )
    }
}

