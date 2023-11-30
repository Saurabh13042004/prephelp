import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import Loader from './Loader';



function AdminNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        const auth = getAuth();
        setLoading(true);
        signOut(auth).then(() => {
            console.log('User signed out!');
            navigate('/');
        }).catch((error) => {
            console.error(error);
        });
        setLoading(false);
    };

    

    return (
        <div> 
        <nav className="bg-white shadow p-4 px-9 flex lg:flex-row md:flext-row flex-col items-center justify-between sticky top-0 z-50">
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
            <div className={`lg:flex md:flex ${isOpen ? 'flex' : 'hidden'} lg:flex-row md:flex-row flex-col items-center space-x-4 transition-all duration-300 ease-in-out`}>
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
                        onClick={handleLogout}
                        className="text-black hover:text-gray-200 px-3 py-2 rounded-md font-semibold"
                    >
                        Log Out
                    </Link>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default AdminNavbar;
