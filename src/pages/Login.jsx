// pages/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-[var(--color-market)] text-white flex flex-col">
      {/* Header with Go Back button */}
      <header className="py-4 px-6 flex justify-between items-center">
        <img src="src/assets/punch-logo.png" alt="Punch" className="h-8" />
        <Link 
          to="/market" 
          className="text-white hover:text-[var(--color-mbutton)] transition-colors text-sm font-medium"
        >
          Go Back to Marketplace
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md">
          {/* Background blob shape */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-[3rem] transform rotate-2"></div>
          
          {/* Login Form */}
          <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-[3rem] p-8 border-2 border-red-500/50 shadow-2xl">
            <h1 className="text-[var(--color-mbutton)] font-bold text-3xl text-center mb-8">
              Welcome Back
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-900/50 text-white placeholder-gray-500 p-4 rounded-xl border border-gray-700 focus:border-[var(--color-mbutton)] focus:outline-none transition-colors"
                required
              />
              
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-900/50 text-white placeholder-gray-500 p-4 rounded-xl border border-gray-700 focus:border-[var(--color-mbutton)] focus:outline-none transition-colors"
                required
              />

              <button 
                type="submit"
                className="w-full bg-[var(--color-mbutton)] text-black font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
              >
                Login
              </button>
            </form>

            <p className="text-center text-gray-400 mt-6">
              New? <Link to="/register" className="text-[var(--color-mbutton)] hover:underline font-semibold">Create your account →</Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-6 text-center text-gray-500 text-sm">
        ©2025 Punch Marketplace. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;