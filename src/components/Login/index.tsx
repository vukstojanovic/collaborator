import React, { FormEvent, useState } from 'react';
import styles from './Login.module.css';

export default function Login(): React.ReactElement {
    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();

    function validateForm() {
        return email && email.length > 0 && password && password.length > 0;
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <div className={styles['Login']}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={!validateForm()}>
                    Login
                </button>
            </form>
        </div>
    );
}
