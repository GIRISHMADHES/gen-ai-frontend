import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const {login} = useAuth();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email=== 'admin@gmail.com' && password === 'admin'){
      login();
      navigate('/dashboard')
    }else{
      setError('Invalid username and password')
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-md-6 col-lg-4">
        <div className="card shadow p-4">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>Use Email: "admin@gmail.com" and password: "admin"</p>
            {error && <div className="text-danger mb-3">{error}</div>}
            <button type="submit" className="btn btn-primary w-100">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
