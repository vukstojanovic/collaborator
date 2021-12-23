import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, sub } from '../redux/actions/counter';
import { RootState } from '../redux/reducers';

function Home() {
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.count.countSum);
    console.log(counter);
    return (
        <div>
            <button onClick={() => dispatch(sub())}>-1</button>
            <div>{counter}</div>
            <button onClick={() => dispatch(add())}>+1</button>
        </div>
    );
}

export default Home;
