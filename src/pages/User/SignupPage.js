import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignupPage() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();

        if (!name || !email || !password || !password2) {
            return setError('All fields are required');
        }

        if (password !== password2) {
            return setError('Passwords do not match');
        }

        const newUser = { name, email, password };

        console.log(newUser);

        fetch('http://localhost:4020/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    return response.json();
                }
                setError(response.statusText);
            })
            .then((data) => {
                console.log(data);
                history.push('/login');
            })
            .catch((err) => setError(err.message))
    }

    return (
        <div>
            <h2>Signup</h2>
            {error && <h2>{error}</h2>}
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ex: John Doe"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="name">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ex: jdoe@gmail.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="name">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="name">Confirm Password</label>
                    <input
                        type="password"
                        id="password2"
                        name="password2"
                        value={password2}
                        onChange={(event) => setPassword2(event.target.value)}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignupPage;