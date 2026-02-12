import React, { useState } from 'react'
import pineappleImg from '../assets/pine_apple.png';
import { Link } from 'react-router-dom';

function Signup() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Signup attempt:', { userName, email, password });
    };

    return (
        <div className="min-h-screen bg-[var(--color-market)] text-white flex flex-col">
            {/* Header with Go Back button */}
            <header className="py-6 px-6 flex justify-between items-center bg-[#333440] mb-3">
                <img src={pineappleImg} alt="Punch" className="h-10" />
                <Link
                    to="/market"
                    className="text-white hover:text-[var(--color-mbutton)] transition-colors text-sm "
                >
                    Go Back to Marketplace
                </Link>
            </header>

            {/* Signup Content */}
            <main className="flex-1 flex items-center justify-center p-4">
                <div className="relative w-full max-w-md">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-md transform rotate-0"></div>

                    {/* Login Form */}
                    <div className="relative bg-gradient-to-br shadow-[0_0_40px_rgba(65,44,212,.25)] from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-md p-8 border-2 border-[#182133] shadow-2xl">
                        <div className="w-full bg-[var(--color-mbutton)] text-black shadow-[0_0_18px_rgba(255,202,79,0.5)] font-bold placeholder-gray-500 p-2 rounded-md border border-[var(--color-mbutton)] focus:outline-none transition-colors mb-3">
                            <h2 className='text-center'>❗ Please note: New Users must have a paid order to sign up.</h2>
                        </div>
                        <h1 className="text-[var(--color-mbutton)] font-bold text-3xl text-center mb-8">
                            Create Your ACcount
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Username"
                                value={userName}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-900/50 text-white placeholder-gray-500 p-2 rounded-md border border-gray-700 focus:border-[var(--color-mbutton)] focus:outline-none transition-colors"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-900/50 text-white placeholder-gray-500 p-2 rounded-md border border-gray-700 focus:border-[var(--color-mbutton)] focus:outline-none transition-colors"
                                required
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-gray-900/50 text-white placeholder-gray-500 p-2 rounded-md border border-gray-700 focus:border-[var(--color-mbutton)] focus:outline-none transition-colors"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full bg-[var(--color-mbutton)] hover:shadow-[0_0_18px_rgba(255,202,79,0.5)] text-black font-bold p-2 rounded-md hover:opacity-90 transition-opacity shadow-lg"
                            >
                                Signup
                            </button>
                        </form>

                        <p className="text-center text-gray-400 mt-6">
                            Already Signed up? <Link to="/login" className="text-[var(--color-mbutton)] hover:text-primary">Log in →</Link>
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-4 px-6 bg-black text-center text-gray-400 mt-2 text-sm">
                ©2025 Punch Marketplace. All rights reserved.
            </footer>
        </div>
    )
}

export default Signup
