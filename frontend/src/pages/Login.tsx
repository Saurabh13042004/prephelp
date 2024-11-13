import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value && !value.endsWith('@chitkarauniversity.edu.in')) {
      setEmailError('Please use your Chitkara University email');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailError && email && password) {
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <img 
              className="object-cover object-top w-full h-full"
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Students studying"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
              <h3 className="text-4xl font-bold text-white">
                Prepare Smarter, <br className="hidden xl:block" />
                Interview Better
              </h3>
              <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  'Real Interview Experiences',
                  'Interactive Code Editor',
                  'Company-Specific Prep',
                  'AI Mock Interviews'
                ].map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full">
                      <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Welcome Back</h2>
            <p className="mt-2 text-base text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-200 hover:opacity-80">
                Create a free account
              </a>
            </p>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="w-5 h-5" />
                    </div>

                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="student@chitkarauniversity.edu.in"
                      className={`block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 
                        border rounded-md bg-gray-50 focus:outline-none focus:bg-white caret-indigo-600
                        ${emailError ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-indigo-600'}`}
                    />
                  </div>
                  {emailError && (
                    <p className="mt-2 text-sm text-red-500">{emailError}</p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      Password
                    </label>
                    <a href="#" className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-80">
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="w-5 h-5" />
                    </div>

                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 
                        border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-indigo-600 
                        focus:bg-white caret-indigo-600"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white 
                      transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-indigo-600 
                      to-purple-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold 
                  text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-50 
                  focus:bg-gray-50 hover:text-black focus:text-black focus:outline-none"
              >
                <div className="absolute inset-y-0 left-0 p-4">
                  <svg className="w-6 h-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                    ></path>
                  </svg>
                </div>
                Sign in with Google
              </button>

              <button
                type="button"
                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold 
                  text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-50 
                  focus:bg-gray-50 hover:text-black focus:text-black focus:outline-none"
              >
                <div className="absolute inset-y-0 left-0 p-4">
                  <svg className="w-6 h-6 text-[#2563EB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </div>
                Sign in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}