import { useDispatch, useSelector } from 'react-redux';
import useInput from 'src/custom-hooks/useInput';
import { RootState } from '@reduxStore/reducers';
import {
    tutorialsList,
    tutorialsStateType,
} from '@reduxStore/reducers/tutorialsReducer';
import { add, erase } from '@reduxStore/actions/tutorials';

export default function Tutorials() {
    const [tutorial, tutorialInput] = useInput('');
    const tutorialsList = useSelector(
        (state: { tutorial: tutorialsStateType }) =>
            state.tutorial.tutorialsList
    );
    const dispatch = useDispatch();
    console.log(tutorial);
    return (
        <div style={{ margin: '20px' }}>
            <input type="text" {...tutorialInput} />
            <button onClick={() => dispatch(add(String(tutorial)))}>
                Add new tutorial
            </button>
            <div className="tutorials">
                {tutorialsList.map((item: tutorialsList) => (
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
