import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "../firebase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [visiblePass, setVisiblePass] = useState(false);

  const handlePassVisible = () => {
    setVisiblePass(!visiblePass);
  };
  const handleSignInDb = async (e) => {
    e.preventDefault();
    const obj = {
      email: email,
      password: password,
    };

    let res = await fetch(`${import.meta.env.VITE_SERVER}/adminlogin`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json",
      },
    });
    res = await res.json();

    cookies.set("token", res.token);
    cookies.set("isAdmin", res.isAdmin);
    if (res.success) {
      toast.success(res.message, {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setTimeout(() => {
        navigate("/admin");
        window.location.reload();
      }, 1010);
    } else {
      toast.error("Invalid credentials", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  // Random positions for circles
  const circleStyles = [
    { top: "10%", left: "15%", backgroundColor: "indigo" },

    {
      top: "100%",
      left: "80%",
      backgroundColor: "blue",
      transform: "translate(-50%, -100%)",
    },
  ];

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
      <Navbar />
      <div className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
        {/* Random Circles */}
        {circleStyles.map((style, index) => (
          <div
            key={index}
            className={`absolute w-[100px] h-[100px] bg-${style.backgroundColor}-00 rounded-full`}
            style={{ ...style, transform: "translate(-50%, -50%)" }}
          ></div>
        ))}

        {/* Form Card */}
        <div className="relative z-10 bg-white p-8 rounded-lg  shadow-md w-full sm:w-[96px] md:w-[420px] lg:w-[524px]">
          <div className="text-center mb-8">
            <div className="text-2xl text-indigo-800 tracking-wide font-semibold">
              Login to Your Account
            </div>
            <p className="text-gray-500 mt-3">Sign in to proceed.</p>
          </div>
          <form onSubmit={handleSignInDb} method="POST">
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide mb-2">
                Email Address
              </div>
              <input
                className="w-full text-lg border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide mb-2">
                  Password
                </div>
                <div>
                  <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type={visiblePass ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                className="absolute w-6 top-3 right-2 flex justify-center items-center"
                onClick={handlePassVisible}
              >
                {visiblePass ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="mt-10">
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
