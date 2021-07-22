import * as Types from '../constants/ActionTypes';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type) {
        case Types.EDIT_PRODUCTS:
            return action.product;
        default:
            return state;
    }
}

export default itemEditing;