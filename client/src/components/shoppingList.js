import React, { Component } from 'react';
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'rice' },
            { id: uuid(), name: 'dood' },
            { id: uuid(), name: 'dahi' },
            { id: uuid(), name: 'eggs' }
        ]
    }

    render() {
        const { items } = this.state;
        return (
            <div className="container">
                <br />
                <br />
                <a className="btn waves-effect waves-light grey darken-1 pulse"
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }));
                        }
                    }}
                >Add New Item</a>
                <br /><br />
                <table className="striped centered">
                    <tbody>
                        {items.map(({id, name }) => (
                            <tr key={id} className="hoverable">
                                <td>
                                    {name}
                                    <a className="btn-small waves-effect waves-light red right"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id != id)
                                            }))
                                        }}
                                    ><i className="material-icons">delete</i></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ShoppingList;