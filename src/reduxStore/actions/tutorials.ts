import actionTypes from '@reduxStore/actions/actionTypes';

export function add(name: string) {
    return {
        type: actionTypes.ADD_TUTORIAL,
        payload: name,
    };
}

export function erase(id: string) {
    return {
        type: actionTypes.ERASE_TUTORIAL,
        payload: id,
    };
}
