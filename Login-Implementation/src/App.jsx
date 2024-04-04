import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === '' || password === '') {
      setMessage('Please fill out all fields!');
    } else if (username === 'user' && password === 'password') {
      setMessage('Welcome, user!');
      setLoggedIn(true);
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>XLogin</h2>
      {!loggedIn ? (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
          {message && <div className="error-message">{message}</div>}
        </form>
      ) : (
        <div className="welcome-message">{message}</div>
      )}
    </div>
  );
}

export default App;
