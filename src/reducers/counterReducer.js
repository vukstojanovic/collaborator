const initialState = {
    countSum : 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            state.countSum++;
            return Object.assign({}, state);
        case 'SUB':
            state.countSum--;
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default counterReducer;