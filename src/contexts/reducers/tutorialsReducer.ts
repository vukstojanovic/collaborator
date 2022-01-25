import actionTypes from '../actions/actionTypes';
import { defaultStateProps, tutorialsListItem } from '../types';

export default function tutorialsReducer(
    state: defaultStateProps,
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
                (item: tutorialsListItem) => item.id !== action.payload
            );
            return { ...state, tutorialsList: reducedList };
        }
        default:
            return state;
    }
}
