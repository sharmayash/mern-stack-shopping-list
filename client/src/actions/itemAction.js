import { Get_items, Add_item, Delete_item } from './types';

export const getItems = () => {
    return {
        type: Get_items
    };
};

export const deleteItems = (id) => {
    return {
        type: Delete_item,
        payload: id
    };
};

export const addItem = (item) => {
    return {
        type: Add_item,
        payload: item
    };
};