import actionTypes from './actionTypes';

function add(title: string) {
    return {
        type: actionTypes.ADD_TUTORIAL,
        payload: title,
    };
}

function erase(id: string) {
    return {
        type: actionTypes.ERASE_TUTORIAL,
        payload: id,
    };
}
