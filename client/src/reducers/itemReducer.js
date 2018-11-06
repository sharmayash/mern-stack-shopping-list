import { Get_items, Add_item, Delete_item, Items_loading } from '../actions/types';


const initialState = {
    items: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Get_items:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case Delete_item:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case Add_item:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case Items_loading:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}