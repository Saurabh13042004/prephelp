import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [hoveredOption, setHoveredOption] = useState(null);

    const handleHover = (option) => {
        setHoveredOption(option);
    };

    const handleLeave = () => {
        setHoveredOption(null);
    };

    return (
        <div className="bg-white shadow-lg p-4  px-9 flex lg:flex-row md:flext-row flex-col items-center justify-between">
            {/* Brand */}
            <div className="text-black">
                <Link to='/'>
                <p className="text-2xl font-bold">PrepHelp</p>
                </Link>
            </div>

            {/* Options */}
            <div className="flex lg:flex-row md:flex-row flex-col items-center space-x-4">
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
                <div className="relative group" onMouseEnter={() => handleHover('questions')} onMouseLeave={handleLeave}>
                    <p
                        className="text-black hover:text-gray-200 px-3 py-2 rounded-md font-semibold"
                    >
                        Questions
                    </p>
                    {hoveredOption === 'questions' && (
                        <div className="absolute top-full left-0 bg-white border border-gray-300 rounded-md p-2">
                            <Link to="/tech-questions" className="block px-4 py-2 text-gray-700">Tech. Questions</Link>
                            <Link to="/non-tech-questions" className="block px-4 py-2 text-gray-700">Non Tech. Questions</Link>
                        </div>
                    )}
                </div>

                {/* Experience Form */}
                <div className="relative group" onMouseEnter={() => handleHover('experience')} onMouseLeave={handleLeave}>
                   <Link to='/Form' className=' text-black font-semibold'>
                        Experience Form
                   </Link>
                </div>

                {/* Admin Login */}
                <div className="relative group" onMouseEnter={() => handleHover('admin')} onMouseLeave={handleLeave}>
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
