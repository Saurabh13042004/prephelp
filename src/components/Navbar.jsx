import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-800 shadow-lg p-4 px-9 flex lg:flex-row md:flex-row flex-col items-center justify-between">
            {/* Brand for Medium and Large Screens */}
            <div className="lg:flex md:flex hidden items-center">
                <div className="text-white mr-4 transition-all duration-300 hover:text-gray-200">
                    <Link to='/'>
                        <p className="text-2xl font-bold">PrepHelp</p>
                    </Link>
                </div>
            </div>

            {/* Brand and Hamburger for Small Screens */}
            <div className="lg:hidden md:hidden flex items-center justify-between w-full">
                {/* Brand for Small Screens */}
                <div className="text-white transition-all duration-300 hover:text-gray-200">
                    <Link to='/'>
                        <p className="text-2xl font-bold">PrepHelp</p>
                    </Link>
                </div>

                {/* Hamburger Icon for Small Screens */}
                <div className="cursor-pointer" onClick={handleToggle}>
                    <svg
                        className={`w-6 h-6 text-white transition-transform transform ${isOpen ? 'rotate-90' : 'rotate-0'} hover:rotate-90`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        ></path>
                    </svg>
                </div>
            </div>

            {/* Options for Medium and Large Screens */}
            <div className={`lg:flex md:flex hidden lg:flex-row md:flex-row items-center space-x-4`}>
                {/* Home */}
                <div className="relative group transition-all duration-300 hover:text-gray-200">
                    <Link
                        to="/"
                        className="text-white px-3 py-3 rounded-md font-semibold hover:bg-gray-700"
                    >
                        Home
                    </Link>
                </div>

                {/* Questions */}
                <div className="relative group transition-all duration-300 hover:text-gray-200">
                    <Link
                        to='/questions'
                        className="text-white px-3 py-3 rounded-md font-semibold hover:bg-gray-700"
                    >
                        Questions
                    </Link>
                </div>

                {/* Experience Form */}
                <div className="relative group transition-all duration-300 hover:text-gray-200">
                    <Link to='/Form' className=' text-white px-3 py-3 rounded-md font-semibold hover:bg-gray-700'>
                        Experience Form
                    </Link>
                </div>

                {/* Admin Login */}
                <div className="relative group transition-all duration-300 hover:text-gray-200">
                    <Link
                        to="/Login"
                        className="text-white px-3 py-3 rounded-md font-semibold hover:bg-gray-700"
                    >
                        Admin Login
                    </Link>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden md:hidden mt-2 space-y-2">
                    <Link to="/" className="text-white px-4 pr-2 py-2 rounded-md block transition-all duration-300 hover:text-gray-200 hover:bg-gray-700">Home</Link>
                    <Link to="/questions" className="text-white px-4 pr-2 py-2 rounded-md block transition-all duration-300 hover:text-gray-200 hover:bg-gray-700">Questions</Link>
                    <Link to="/Form" className="text-white px-4 pr-2 py-2 rounded-md block transition-all duration-300 hover:text-gray-200 hover:bg-gray-700 hover:w-auto">Experience Form</Link>
                    <Link to="/Login" className="text-white px-4 pr-2 py-2 rounded-md block transition-all duration-300 hover:text-gray-200 hover:bg-gray-700">Admin Login</Link>
                </div>
            )}
        </div>
    );
}

export default Navbar;
