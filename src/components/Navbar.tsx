import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Navbar: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
      setShowLogin(false);
      setUsername('');
      setPassword('');
    } catch (error) {
      alert('Login failed.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <header className="py-4 border-b relative">
      <nav className="flex justify-between items-center w-[90%] max-w-[1900px] mx-auto">
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.svg" alt="Byway Logo" />
          <span className="text-xl font-inter"><a href="/">Byway</a></span>
        </div>

        <div className="flex items-center gap-3">
          <img src="/assets/icons/cart.svg" alt="cart" className="h-6 sm:inline-block hidden" />
          {!isLoggedIn ? (
            <>
              <button onClick={() => setShowLogin(!showLogin)} className="px-4 py-2 text-sm border border-gray-600 text-gray-600 hover:bg-gray-100">Log In</button>
              <button onClick={() => alert('This is a dummy action.')} className="px-4 py-2 text-sm bg-gray-800 text-white hover:bg-blue-700">Sign Up</button>
            </>
          ) : (
            <button onClick={handleLogout} className="px-4 py-2 text-sm bg-red-600 text-white hover:bg-red-700">Logout</button>
          )}
        </div>
      </nav>

      {showLogin && (
        <div className="absolute top-16 right-8 bg-white border rounded-lg shadow-lg p-6 w-72 z-50">
          <form onSubmit={handleLogin}>
            <h3 className="text-lg font-semibold mb-4">Log In</h3>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded mb-3 text-sm"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded mb-4 text-sm"
              required
            />
            <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded text-sm hover:bg-blue-700">Submit</button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;
