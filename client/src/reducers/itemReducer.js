import uuid from 'uuid';
import { Get_items, Add_item, Delete_item } from '../actions/types';


const initialState = {
    items: [
        { id: uuid(), name: 'rice' },
        { id: uuid(), name: 'dood' },
        { id: uuid(), name: 'dahi' },
        { id: uuid(), name: 'mil' }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Get_items:
            return {
                ...state
            }
        case Delete_item:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case Add_item:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
            return state;
    }
}