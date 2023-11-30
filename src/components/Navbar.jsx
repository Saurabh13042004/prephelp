import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white shadow-lg p-4 px-9 flex lg:flex-row md:flext-row flex-col items-center justify-between">
            {/* Brand */}
            <div className="text-black">
                <Link to='/'>
                    <p className="text-2xl font-bold">PrepHelp</p>
                </Link>
            </div>

            {/* Hamburger Menu for Small Screens */}
            <div className="lg:hidden cursor-pointer" onClick={handleToggle}>
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </div>

            {/* Options for Large Screens */}
            <div className={`lg:flex md:flex ${isOpen ? 'flex' : 'hidden'} lg:flex-row md:flex-row flex-col items-center space-x-4`}>
                {/* Home */}
                <div className="relative group">
                    <Link
                        to="/"
                        className="text-black hover:text-gray-200 px-3 py-2 rounded-md font-semibold"
                    >
                        Home
                    </Link>
                </div>

                {/* Questions */}
                <div className="relative group">
                    <Link
                        to='/questions'
                        className="text-black hover:text-gray-200 px-3 py-2 rounded-md font-semibold"
                    >
                        Questions
                    </Link>
                </div>

                {/* Experience Form */}
                <div className="relative group">
                    <Link to='/Form' className=' text-black font-semibold'>
                        Experience Form
                    </Link>
                </div>

                {/* Admin Login */}
                <div className="relative group">
                    <Link
                        to="/Login"
                        className="text-black hover:text-gray-200 px-3 py-2 rounded-md font-semibold"
                    >
                        Admin Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
