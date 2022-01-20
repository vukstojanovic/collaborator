import { Action } from 'redux';

export type tutorialsList = {
    id: number;
    title: string;
};

export type tutorialsStateType = {
    tutorialsList: tutorialsList[];
    lastId: number;
};

const defaultState = {
    tutorialsList: [
        {
            id: 1,
            title: 'First Tutorial',
        },
        {
            id: 2,
            title: 'Second Tutorial',
        },
    ],
    lastId: 2,
};

export default function tutorialsReducer(
    state = defaultState,
    action: { type: string; payload: string | number }
) {
    switch (action.type) {
        case 'add': {
            const newId = state.lastId + 1;
            const newTutorial = { id: newId, title: action.payload };
            return {
                tutorialsList: [...state.tutorialsList, newTutorial],
                lastId: newId,
            };
        }
        case 'erase': {
            const reducedList = state.tutorialsList.filter(
                (item) => item.id !== action.payload
            );
            return { ...state, tutorialsList: reducedList };
        }
        default:
            return state;
    }
}
