import React, { useEffect, useState } from 'react';
import useInput from 'src/custom-hooks/useInput';

export default function Showoff() {
    const [redColor, setRedColor] = useState(true);
    const [seconds, setSeconds] = useState(0);
    const [name, nameObj] = useInput('');
    const [lastName, lastNameObj] = useInput('');

    function changeColor() {
        alert('I am async');
        const myInterval = setInterval(() => {
            if (redColor) {
                setRedColor((prev) => !prev);
                console.log('changed');
            }
        }, 1000);
        return () => clearInterval(myInterval);
    }

    function askIfSleeping() {
        if (seconds === 30) {
            confirm('Are you asleep?');
        }
        setSeconds((prev) => prev + 1);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert(`Your name is ${name} ${lastName}`);
    }

    useEffect(() => {
        const myTimeout = setTimeout(() => changeColor(), 5000);
        return () => clearTimeout(myTimeout);
    }, []);

    useEffect(() => {
        const countdownInterval = setInterval(() => askIfSleeping(), 1000);
        return () => clearInterval(countdownInterval);
    }, []);

    return (
        <>
            <h1 style={{ color: redColor ? 'red' : 'blue' }}>Showoff page</h1>
            <p>You have been on this page for: {seconds} seconds</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name: </label>
                    <input type="text" {...nameObj} />
                </div>
                <div>
                    <label htmlFor="">Last Name: </label>
                    <input type="text" {...lastNameObj} />
                </div>
                <button>Submit meeee!</button>
            </form>
        </>
    );
}
