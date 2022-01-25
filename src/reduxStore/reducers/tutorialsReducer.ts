import { Action } from 'redux';
import actionTypes from '@reduxStore/actions/actionTypes';

export type tutorialsListItem = {
    id: string;
    title: string;
};

const defaultState = {
    tutorialsList: [
        {
            id: '1',
            title: 'First Tutorial',
        },
        {
            id: '2',
            title: 'Second Tutorial',
        },
    ],
    lastId: '2',
};

export default function tutorialsReducer(
    state = defaultState,
    action: { type: string; payload: string }
) {
    switch (action.type) {
        case actionTypes.ADD_TUTORIAL: {
            const newId = String(Number(state.lastId + 1));
            const newTutorial = {
                id: newId,
                title: action.payload,
            };
            return {
                tutorialsList: [...state.tutorialsList, newTutorial],
                lastId: newId,
            };
        }
        case actionTypes.ERASE_TUTORIAL: {
            const reducedList = state.tutorialsList.filter(
                (item) => item.id !== action.payload
            );
            return { ...state, tutorialsList: reducedList };
        }
        default:
            return state;
    }
}
