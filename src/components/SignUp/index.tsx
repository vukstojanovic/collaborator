import { useState } from 'react';
import signUp from '../../api/signupService';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button onClick={() => signUp({ email, password })}>Sign up</button>
        </div>
    );
};

export default SignUp;
