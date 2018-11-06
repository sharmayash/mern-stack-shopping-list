import { Get_items, Add_item, Delete_item, Items_loading } from './types';
import axios from 'axios';

export const getItems = () => dispatch => {
    dispatch(itemsLoading());
    axios
        .get('/api/items')
        .then(res => dispatch({
            type: Get_items,
            payload: res.data
        }));
};

export const deleteItems = (id) => dispatch => {
    axios
        .delete(`/api/items/${id}`)
        .then(res => dispatch({
            type: Delete_item,
            payload: id
        }))
};

export const addItem = (item) => dispatch => {
    axios
        .post('/api/items', item)
        .then(res => dispatch({
            type: Add_item,
            payload: res.data
        }))
};


export const itemsLoading = () => {
    return {
        type: Items_loading
    };
};