'use client'

import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Link from 'next/link';


function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`h-screen flex flex-col ${darkMode ? 'bg-gradient-to-b from-indigo-500 ...' : 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'}`}>
      {/* Header */}
      <header className="flex-grow p-6 bg-glow shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <img src="" alt="Logo" className="h-10" />
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}></h1>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden mb-6" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 'Close' : 'Menu'}
          </button>

          <img src="/hero.png" alt="Logo" className="h-10 flex item-center" />

          {/* Navigation */}
          <nav className={`ml-auto flex flex-col space-y-4 md:space-y-0 md:flex-row space-x-0 md:space-x-6 text-center sm:text-center ${menuOpen ? 'block' : 'hidden md:block'}`}>
          <a href="/pricing" className={`px-2 py-1 hover:shadow-xl hover:bg-opacity-90 hover:bg-blue-500 transition-all duration-300 rounded-md ${darkMode ? 'text-white' : 'text-gray-900'}`}>Pricing</a>
          <a href="/dashboard" className={`px-2 py-1 hover:shadow-xl hover:bg-opacity-90 hover:bg-blue-500 transition-all duration-300 rounded-md ${darkMode ? 'text-white' : 'text-gray-900'}`}>Log in</a>
          <a href="#" className={`px-2 py-1 hover:shadow-xl hover:bg-opacity-90 hover:bg-blue-500 transition-all duration-300 rounded-md ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sign up</a>
          <Link href="/playground">
  <button className={`bg-blue-500 text-white hover:shadow-xl hover:bg-blue-700 px-5 py-2.5 rounded-lg ${darkMode ? 'text-gray-900' : 'text-blue-500'}`}>
    Create form
  </button>
</Link>

            
            {/* Dark mode toggle */}
            <button onClick={toggleDarkMode} className="ml-6 p-2 rounded-full bg-white hover:bg-gray-200">
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </nav>
        </div>
        <img src="hero.png" alt="Description of the image" className="mb-4 mx-auto block" />

        {/* Main Content */}
        <div className="flex mt-54 flex-col items-center justify-center flex-grow space-y-6">
          <h1 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>The simplest way to <span className='text-blue-500 text-8xl'>create</span> form</h1>
          <p className={`text-2xl ${darkMode ? 'text-white' : 'text-gray-700'}`}>Create forms for all purposes in seconds.<br />Without knowing how to code, and for free!</p>
          <Link href="/playground">
          <button className="bg-blue-500 text-white px-8 py-4 hover:shadow-2xl hover:bg-blue-700 rounded-lg">Create form</button>
          </Link>
          <p className={`text-md ${darkMode ? 'text-white' : 'text-gray-700'}`}>No signup required</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
