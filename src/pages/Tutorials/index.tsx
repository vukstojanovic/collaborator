import { useDispatch, useSelector } from 'react-redux';
import useInput from 'src/custom-hooks/useInput';
import { RootState } from '@reduxStore/reducers';
import { tutorialsListItem } from '@reduxStore/reducers/tutorialsReducer';
import { add, erase } from '@reduxStore/actions/tutorials';
import { useContext } from 'react';
import { TutorialsContext } from '../../contexts/TutorialsContextProvider';

export default function Tutorials() {
    const [tutorial, tutorialInput] = useInput('');
    // const tutorialsList = useSelector(
    //     (state: RootState) => state.tutorial.tutorialsList
    // );
    // const dispatch = useDispatch();
    // console.log(tutorial);
    const { state, dispatch } = useContext(TutorialsContext);
    const tutorialsList = state.tutorialsList;
    console.log(state, TutorialsContext);
    return (
        <div style={{ margin: '20px' }}>
            <input type="text" {...tutorialInput} />
            <button onClick={() => dispatch(add(String(tutorial)))}>
                Add new tutorial
            </button>
            <div className="tutorials">
                {tutorialsList.map((item: tutorialsListItem) => (
                    <div key={item.id}>
                        {item.title}{' '}
                        <button onClick={() => dispatch(erase(item.id))}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
