import actionTypes from "../actions/actionTypes";

const initialState = {
    countSum : 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            state.countSum++;
            return Object.assign({}, state);
        case actionTypes.SUB:
            state.countSum--;
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default counterReducer;