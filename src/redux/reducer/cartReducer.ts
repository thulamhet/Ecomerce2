import { ADD_ITEM } from "../action/cartAction";

const initialValue = {
    items: [],
};

export default function colorReducer (state = initialValue, action: any) {
    switch(action.type) {
        case ADD_ITEM:
            return action.payload;
        default: 
            return state;
    }
};