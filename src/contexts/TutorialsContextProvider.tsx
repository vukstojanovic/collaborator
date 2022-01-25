import {
    createContext,
    PropsWithChildren,
    useContext,
    useReducer,
} from 'react';
import tutorialsReducer from './reducers/tutorialsReducer';

export const TutorialsContext = createContext<any>(null);

export const defaultState = {
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

export default function TutorialsContextProvider({
    children,
}: PropsWithChildren<unknown>) {
    const [state, dispatch] = useReducer(tutorialsReducer, defaultState);

    return (
        <TutorialsContext.Provider value={{ state, dispatch }}>
            {children}
        </TutorialsContext.Provider>
    );
}
