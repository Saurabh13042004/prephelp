import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cookies from "universal-cookie";
import RingLoader from "react-spinners/RingLoader";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [universityId, setUniversityId] = useState("");
  const [validResponse, setValidResponse] = useState(true);
  const [loading, setLoading] = useState(false);
  const [Userotp, setUserotp] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies();
  const signupRef = useRef(null);
  const otpRef = useRef(null);
  const [newEmail, setNewEmail] = useState("");
  const [emailDomain, setEmailDomain] = useState("@chitkarauniversity.edu.in");
  const [showPassCondition, setShowPassCondition] = useState(false);
  const [visiblePass, setVisiblePass] = useState(false);

  useEffect(() => {
    otpRef.current.style.display = "none";
  }, []);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setNewEmail(value.trim() + emailDomain);
  };
  const handleUidChange = (e) => {
    const enteredUid = e.trim();
    const isValidUid = enteredUid.length === 10;

    if (isValidUid) {
      setUniversityId(enteredUid);
      return true;
    } else {
      setValidResponse(false);
      return false;
    }
  };
  const handleSignUpDb = async (e) => {
    e.preventDefault();
    setLoading(true);

    const isValidEmail = true;
    if (!isValidEmail) {
      toast.error("Please enter the chitkara email", {
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
    const isValidUid = handleUidChange(universityId);
    if (!isValidUid) {
      toast.error("Please enter the valid Id", {
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

    if (isValidEmail && isValidUid) {
      const obj = {
        name: name,
        email: newEmail,
        password: password,
        uid: parseInt(universityId),
        otp: Userotp,
      };

      let res = await fetch(`${import.meta.env.VITE_SERVER}/signup`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json",
        },
      });
      res = await res.json();
      cookies.set("token", res.token);
      cookies.set("isAdmin", false);

      cookies.set("email", newEmail);
      cookies.set("name", name);
      cookies.set("uid", universityId);

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

        otpRef.current.style.display = "block";
        signupRef.current.style.display = "none";
        setTimeout(() => {
          navigate("/home");
          window.location.reload();
        }, 1010);
      } else {
        toast.error(res.message, {
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
    }
    setLoading(false);
  };
  const handleValidPassword = (e) => {
    const enteredPassword = e.trim();
    const validPassLength = enteredPassword.length >= 8;
    let includeLowerCase = false,
      includeUpperCase = false,
      includeNumber = false,
      includeSpecialChar = false;
    for (let i = 0; i < enteredPassword.length; i++) {
      if (
        includeLowerCase == false &&
        enteredPassword[i] >= "a" &&
        enteredPassword[i] <= "z"
      ) {
        includeLowerCase = true;
      }
      if (
        includeUpperCase == false &&
        enteredPassword[i] >= "A" &&
        enteredPassword[i] <= "Z"
      ) {
        includeUpperCase = true;
      }
      if (
        includeNumber == false &&
        enteredPassword[i] >= "0" &&
        enteredPassword[i] <= "9"
      ) {
        includeNumber = true;
      }
      if (includeSpecialChar == false && enteredPassword[i] == "@") {
        includeSpecialChar = true;
      }
    }

    if (
      validPassLength &&
      includeLowerCase &&
      includeUpperCase &&
      includeNumber &&
      includeSpecialChar
    ) {
      return true;
    } else {
      return false;
    }
  };
  const changeDisplay = async () => {
    setLoading(true);
    const isValidEmail = true;
    if (!isValidEmail) {
      toast.error("Please enter the chitkara email", {
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
    const isValidUid = handleUidChange(universityId);
    if (!isValidUid) {
      toast.error("Please enter the valid Id", {
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
    const validPassword = handleValidPassword(password);
    if (!validPassword) {
      toast.error("Please enter valid password", {
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

    if (isValidEmail && isValidUid && validPassword) {
      let res = await fetch(`${import.meta.env.VITE_SERVER}/verifyEmail`, {
        method: "POST",
        body: JSON.stringify({
          email: newEmail,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      res = await res.json();
      if (res.success) {
        otpRef.current.style.display = "block";
        signupRef.current.style.display = "none";
      } else {
        toast.error(res.message, {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
    setLoading(false);
  };
  const circleStyles = [
    { top: "10%", left: "15%", backgroundColor: "indigo" },

    {
      top: "100%",
      left: "80%",
      backgroundColor: "blue",
      transform: "translate(-50%, -100%)",
    },
  ];
  const handlePasswordFocus = () => {
    setShowPassCondition(true);
  };
  const handlePasswordBlur = () => {
    setShowPassCondition(false);
  };
  const handlePassVisible = () => {
    setVisiblePass(!visiblePass);
  };

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
      {loading && (
        <div className="w-full h-full absolute flex justify-center items-center z-50 bg-opacity-25 bg-slate-700">
          <RingLoader
            color={"blue"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className="relative h-screen flex items-center p-8 mt-8 justify-center bg-gray-100 overflow-hidden">
        {/* Render Circles */}
        {circleStyles.map((style, index) => (
          <div
            key={index}
            className={`absolute w-[100px] h-[100px] bg-${style.backgroundColor}-500 rounded-full`}
            style={{ ...style, transform: "translate(-50%, -50%)" }}
          ></div>
        ))}

        <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md mt-1">
          <div className="text-center mb-4">
            <div className="text-2xl text-indigo-800 font-semibold">
              Sign Up for a New Account
            </div>
            <p className="text-gray-500 mt-3">
              Create an account to access additional features.
            </p>
          </div>
          <form onSubmit={handleSignUpDb} method="POST">
            <div ref={signupRef}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-700"
                >
                  Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700"
                >
                  Email Address*
                </label>
                <div className="flex justify-between items-center flex-wrap">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="w-1/2 mt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <select
                    className=" w-1/2 h-11 mt-2 text-lg border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    value={emailDomain}
                    onChange={(e) => setEmailDomain(e.target.value)}
                  >
                    <option value="@chitkarauniversity.edu.in">
                      @chitkarauniversity.edu.in
                    </option>
                    {/* <option value="gmail.com">gmail.com</option>
                    <option value="yahoo.com">yahoo.com</option>
                    <option value="outlook.com">outlook.com</option> */}
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-gray-700"
                >
                  Password*
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={visiblePass ? "text" : "password"}
                    className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
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
                {showPassCondition && (
                  <span className="flex text-xs font-semibold text-red-600">
                    Password must include at least one uppercase letter, one
                    lowercase letter, one special character, and one number.
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="universityId"
                  className="block text-sm font-bold text-gray-700"
                >
                  University ID*
                </label>
                <input
                  id="universityId"
                  name="universityId"
                  type="text"
                  className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  placeholder="211*******"
                  value={universityId}
                  onChange={(e) => setUniversityId(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <button
                  className="bg-indigo-500 text-gray-100 p-3 w-full rounded-md tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-indigo-600"
                  type="button"
                  onClick={changeDisplay}
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div ref={otpRef}>
              <div className="mb-4">
                <label
                  htmlFor="otp"
                  className="block text-sm font-bold text-gray-700"
                >
                  OTP*
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter OTP"
                  value={Userotp}
                  onChange={(e) => setUserotp(e.target.value)}
                  required
                />
              </div>
              <div className="mb-8">
                <button
                  className="bg-indigo-500 text-gray-100 p-3 w-full rounded-md tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-indigo-600"
                  type="submit"
                >
                  Verify
                </button>
              </div>
            </div>
          </form>
          <div className="text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:text-indigo-800">
              Log in here
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
