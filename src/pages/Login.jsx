import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student'); // Default to student

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic based on email, password, and userType
    if (userType === 'student') {
      // Perform student login
      console.log('Logging in as a student');
    } else if (userType === 'admin') {
      // Perform admin login
      console.log('Logging in as an admin');
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
  <div className="text-center lg:text-left lg:mx-16 p-4">
    <h1 className="text-5xl font-bold">Welcome to PrepHelp</h1>
    <p className="py-6 text-2xl">
      Share your placement interview experiences and get prepared with insights from others. Join the PrepHelp community to excel in your career journey.
    </p>
  </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="email" placeholder="username" className="input input-bordered" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text">Login as</span>
              </label>
              
                <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
