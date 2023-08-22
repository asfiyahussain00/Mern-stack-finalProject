
import React, { useState } from 'react';
import axios from 'axios';

const Signupform = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const SignupUser = (e) => {
        e.preventDefault();
        const payload = { email, password, username };

        axios.post('/api/signup', payload)
            .then((json) => console.log(json.data))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <form onSubmit={SignupUser}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

const Signup = () => {
    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img
                    src="https://img.freepik.com/free-vector/woman-man-holding-coffee-while-look-phone-check-social-media_10045-652.jpg?w=500"
                    alt=""
                    style={styles.image}
                />
            </div>
            <div style={styles.formContainer}>
                <h2 style={styles.heading}>Sign Up</h2>
                <Signupform />
            </div>
        </div>
    );
}
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    imageContainer: {
        marginRight: '50px',
    },
    image: {},
    formContainer: {
        width: '300px',
        backgroundColor: '#f7f7f7',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '20px',
    },
    label: {
        marginBottom: '5px',
    },
    input: {
        width: '10%',
        padding: '8px',
        borderRadius: '3px',
        border: '1px solid #ccc',
        marginTop: '10px', // Add margin to the top
    },
    inputError: {
        width: '100%',
        padding: '8px',
        borderRadius: '3px',
        border: '1px solid red',
    },
    error: {
        color: 'red',
        fontSize: '12px',
    },
    button: {
        width: '100%',
        padding: '8px',
        borderRadius: '3px',
        border: 'none',
        backgroundColor: 'black',
        color: '#fff',
        cursor: 'pointer',
    },
};


export default Signup;
