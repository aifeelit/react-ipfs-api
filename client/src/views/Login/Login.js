import './Login.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { loginUser } from '../../services/api';

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({ username, password });
    setToken(token);
  };

  return(
    <div className="login-container">
      <h3 className="login-header">Log In 🚀</h3> 
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          <p className="form-p">Email</p>
          <input className="form-input" type="text" onChange={e => setUsername(e.target.value)} />
        </label>
        <label className="form-label">
          <p>Password</p>
          <input className="form-input" type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div className="submit-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}