import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StaffLogin.css';

function StaffLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/logins');
      const data = await response.json();

      // Check if credentials match any entry in the 'logins' array
      const isValidUser = data.some(user => 
        user.username === username && user.password === password
      );

      if (isValidUser) {
        // Navigate to the "Documents" page
        navigate('/studentDetails');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='mainLog'>
      <div className="login-container">
        <h1>Staff Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='foBtn' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default StaffLogin;
