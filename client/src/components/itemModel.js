import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemAction';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';


class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }

        this.props.addItem(newItem);
        this.toggleModal();
    }

    render() {
        return (
            <div>
                <br/><br/>
                <a href='!#' className="btn waves-effect waves-light grey darken-1 pulse"
                    onClick={this.toggleModal}
                >Add New Item</a>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggleModal} 
                >
                    <ModalHeader toggle={this.toggleModal}>Add item to shopping cart</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type='text' name='name' id='item' placeholder='Add New Item' onChange={this.onChange} />
                                <Button color="dark" block style={{marginTop: '2rem'}}>Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);