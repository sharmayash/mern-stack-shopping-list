import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItems } from '../actions/itemAction'
import PropTypes from 'prop-types';

class ShoppingList extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItems(id);
    }

    render() {
        const { items } = this.props.item;
        return (
            <div className="container">
                <br />
                <br />
                <br /><br />
                <table className="striped centered">
                    <tbody>
                        {items.map(({id, name }) => (
                            <tr key={id} className="hoverable">
                                <td>
                                    {name}
                                    <a href='!#' className="btn-small waves-effect waves-light red right"
                                        onClick={this.onDeleteClick.bind(this, id)}
                                    ><i className="material-icons">delete_outline</i></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})


export default connect(mapStateToProps, { getItems, deleteItems })(ShoppingList);