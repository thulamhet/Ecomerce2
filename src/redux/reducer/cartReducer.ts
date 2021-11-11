import { CHANGE_ITEM } from "../action/cartAction";

const initialValue = {
    items: [],
};

export default function cartReducer (state = initialValue, action: any) {
    switch(action.type) {
        case CHANGE_ITEM:
            return action.payload;
        default: 
            return state;
    }
};