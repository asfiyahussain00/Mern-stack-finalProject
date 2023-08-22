import React, { useContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../../Context/Context';

const LOGIN = 'LOGIN';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Add error state
  const { dispatch } = useContext(GlobalContext);

  const LoginUser = (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors
    const payload = { email, password };

    axios
      .post('/api/login', payload)
      .then((response) => {
        const token = response.data.token;
        Cookies.set('token', token);
        dispatch({
          type: LOGIN,
          token: token,
        });
      })
      .catch((error) => {
        setError('An error occurred while logging in.');
        console.error('Network error:', error);
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src="https://media.istockphoto.com/id/1248415323/photo/3d-illustration-of-happy-smiling-businessman-in-suit-with-laptop-sitting-in-armchair-cartoon.jpg?s=612x612&w=0&k=20&c=pQQez7m8lNwrlZsJNdCPVixdfCZfA8vQl6Zgmu6D_Vo="
          alt=""
          style={styles.image}
        />
      </div>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login</h2>
        {error && <div style={styles.error}>{error}</div>} {/* Display error message */}
        <form onSubmit={LoginUser} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
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
    padding: '100px',
  },
  formContainer: {
    width: '300px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: '20px',
  },
  image: {
    width: '100%',
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
    width: '100%',
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ccc',
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
