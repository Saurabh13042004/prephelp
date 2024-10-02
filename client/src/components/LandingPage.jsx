import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaCode, FaAccusoft } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";
import Testimonial from "./Testimonial";
import bgVideo from "../assets/chitkara_bg_video.mp4";

function LandingPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isOpen, setIsOpen] = useState(false);
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [uid, setuid] = useState("");
  const cookies = new Cookies();

  useEffect(() => {
    const scrollHandler = () => {
      const offsetTop =
        document.getElementById("stats-section")?.offsetTop || 0;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > offsetTop) {
        startAnimation();
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const startAnimation = () => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    });
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleContactForm = async (e) => {
    e.preventDefault();
    try {
      const obj = {
        name: Name,
        email: email,
        uid: parseInt(uid),
        message: query,
      };
      const response = await fetch(`${import.meta.env.VITE_SERVER}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("token")}`,
        },
        body: JSON.stringify(obj),
      });
      const data = await response.json();
      console.log(data)
      if (data.status === 201) {
        toast.success(data.message, {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setName("");
        setEmail("");
        setQuery("");
        setuid("");
      }
      else
      {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('Something Went wrong')
      console.log(error);
    }
  };
  const handleAbout = () => {
    window.scrollTo({
      top: document.getElementById("about").offsetTop,
      behavior: "smooth",
    });
  };
  const handleHome = () => {
    window.scrollTo({
      top: document.getElementById("home").offsetTop,
      behavior: "smooth",
    });
  };
  const handleFeatures = () => {
    window.scrollTo({
      top: document.getElementById("features").offsetTop,
      behavior: "smooth",
    });
  };
  const handleContact = () => {
    window.scrollTo({
      top: document.getElementById("contact").offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-smooth">
      <ToastContainer
        position="top-left"
        autoClose={1000}
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

      <motion.header
        className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow fixed w-full top-0 z-50">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Brand */}
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                PrepHelp
              </span>
            </Link>

            {/* Buttons for Small Screens */}
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse transition-all ease-in-out duration-300">
              <div>
                <Link
                  className={`hidden md:flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 ${
                    location.pathname === "/login" ||
                    location.pathname === "/signup"
                      ? "hidden"
                      : ""
                  }`}
                  to="/login"
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                  Log in
                </Link>

                <button
                  ref={ref}
                  data-collapse-toggle="navbar-cta"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-cta"
                  aria-expanded="false"
                  id="navbar-toggle"
                  onClick={handleToggle}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Navigation Links for Large Screens */}
            <div
              className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ${
                isOpen ? "hidden" : "flex"
              }`}
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <button
                    onClick={handleHome}
                    className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleAbout}
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleFeatures}
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleContact}
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Navigation Links for Small Screens */}
            <div
              className={`items-center justify-between w-full md:hidden transition-all ease-in-out duration-300 ${
                isOpen ? "flex" : "hidden"
              }`}
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium mt-4 border border-gray-100 rounded-lg bg-gray-50 space-y-2 w-full ">
                <li>
                  <button
                    onClick={handleHome}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleAbout}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleFeatures}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleContact}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <Link
                    className={`flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 ml-3 mb-2 ${
                      location.pathname === "/login" ||
                      location.pathname === "/signup"
                        ? "hidden"
                        : ""
                    }`}
                    to="/login"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    Log in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </motion.header>

      <motion.section
        className="bg-white dark:bg-gray-900 mx-auto h-screen items-center justify-center flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        id="home"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
          autoPlay
          muted
          loop
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50 z-1"></div>

        <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div className="flex justify-center">
              <motion.a
                className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Your Potential
                <span className="flex items-center gap-x-1">
                  <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500">
                    Explore
                  </span>
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </motion.a>
            </div>

            <div className="mt-5 max-w-xl text-center mx-auto">
              <h1 className="block font-bold text-white text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                Welcome to PrepHelp
              </h1>
            </div>

            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-lg text-white dark:text-gray-400">
                PrepHelp is a platform that helps you prepare for your
                interviews by providing you with the best resources and
                guidance.
              </p>
            </div>

            <div className="mt-8 gap-3 flex justify-center">
              <Link
                to="/login"
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
              >
                <RiLoginCircleLine />
                Continue with PrepHelp
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        id="features"
        className="bg-white dark:bg-gray-900 mx-auto xl:my-3 items-center justify-center flex"
      >
        <div className="flex flex-wrap">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center m-4"
          >
            <div className="rounded-full bg-[#F36A8D] p-8">
              <FaCode size={35} color="white" />
            </div>
            <div className="items-start px-4 flex flex-col">
              <p className="text-xl font-bold">Solve Questions</p>

              <p className="w-[250px] text-[#79808A]">
                Solve the most frequently asked questions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center m-4"
          >
            <div className="rounded-full bg-[#20CA66] p-8">
              <FaAccusoft size={35} color="white" />
            </div>
            <div className="items-start px-4 flex flex-col">
              <p className="text-xl font-bold">Interview Experiences</p>
              <p className="w-[250px] text-[#79808A]">
                Read the interview experiences of your seniors.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center m-4"
          >
            <div className="rounded-full bg-[#FA9161] p-8">
              <IoMdMailUnread size={35} color="white" />
            </div>
            <div className="items-start px-4 flex flex-col">
              <p className="text-xl font-bold">Connect with Seniors</p>
              <p className="w-[250px] text-[#79808A]">
                Connect with your seniors and get guidance.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="bg-white dark:bg-gray-900 mx-auto xl:my-3 items-center justify-center flex">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div>
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
                alt="Image Description"
              />
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                    Why to choose PrepHelp?
                  </h2>
                  <p className="text-gray-500">
                    PrepHelp is a platform that helps you prepare for your
                    oncampus interviews by providing you with the interview
                    experiences of your seniors, the most frequently asked
                    questions and the best resources.
                  </p>
                </div>

                <ul role="list" className="space-y-2 sm:space-y-4">
                  <li className="flex space-x-3">
                    <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 h-3.5 w-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm sm:text-base text-gray-500">
                      Easy to <span className="font-bold">use</span>
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 h-3.5 w-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm sm:text-base text-gray-500">
                      Easy to <span className="font-bold">navigate</span>
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 h-3.5 w-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm sm:text-base text-gray-500">
                      Easy to <span className="font-bold">understand</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 mx-auto  items-center justify-center flex">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="relative p-6 md:p-16">
            <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                  Unlock a world of possibilities and prepare for success!
                </h2>

                <nav
                  className="grid gap-4 mt-5 md:mt-10"
                  aria-label="Tabs"
                  role="tablist"
                >
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active"
                    id="tabs-with-card-item-1"
                    data-hs-tab="#tabs-with-card-1"
                    aria-controls="tabs-with-card-1"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                      </svg>
                      <span className="grow ms-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Customizable Rules for Your Successs
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Tailor your preparation with resources specifically
                          designed to maximize your career success.
                        </span>
                      </span>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    id="tabs-with-card-item-2"
                    data-hs-tab="#tabs-with-card-2"
                    aria-controls="tabs-with-card-2"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m12 14 4-4" />
                        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                      </svg>
                      <span className="grow ms-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Empower Your Preparation
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Empower your journey with our modern solutions
                          designed to give you a competitive edge in interviews.
                        </span>
                      </span>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    id="tabs-with-card-item-3"
                    data-hs-tab="#tabs-with-card-3"
                    aria-controls="tabs-with-card-3"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                        <path d="M5 3v4" />
                        <path d="M19 17v4" />
                        <path d="M3 5h4" />
                        <path d="M17 19h4" />
                      </svg>
                      <span className="grow ms-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Unleash the Power of Modern Design
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          PrepHelp brings you powerful features to reduce time
                          and effort in building a modern and polished design
                          for your interview materials.
                        </span>
                      </span>
                    </span>
                  </button>
                </nav>
              </div>

              <div className="lg:col-span-6">
                <div className="relative">
                  <div>
                    <div
                      id="tabs-with-card-1"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-1"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="https://images.pexels.com/photos/1557251/pexels-photo-1557251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Image Description"
                      />
                    </div>

                    <div
                      id="tabs-with-card-2"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-2"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="https://images.pexels.com/photos/6632371/pexels-photo-6632371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      />
                    </div>

                    <div
                      id="tabs-with-card-3"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-3"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                        alt="Image Description"
                      />
                    </div>
                  </div>

                  <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                    <svg
                      className="w-16 h-auto text-orange-500"
                      width="121"
                      height="135"
                      viewBox="0 0 121 135"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                        stroke="currentColor"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                        stroke="currentColor"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                        stroke="currentColor"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
              <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-900 mx-auto items-center justify-center flex"
        id="about"
      >
        <Testimonial />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-900 mx-auto  items-center justify-center flex"
        id="contact"
      >
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl lg:max-w-5xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                Contact us
              </h1>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                We'd love to talk about how we can help you.
              </p>
            </div>

            <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
              <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Fill in the form
                </h2>

                <form onSubmit={handleContactForm} method="post">
                  <div className="grid gap-4">
                    <div>
                      <div>
                        <label
                          htmlFor="hs-firstname-contacts-1"
                          className="sr-only"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="hs-firstname-contacts-1"
                          id="hs-firstname-contacts-1"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          placeholder="First Name"
                          value={Name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="hs-email-contacts-1" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        name="hs-email-contacts-1"
                        id="hs-email-contacts-1"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Email"
                      />
                    </div>

                    <div>
                      <label htmlFor="hs-uid-contacts-1" className="sr-only">
                        University Id
                      </label>
                      <input
                        type="text"
                        name="hs-email-contacts-1"
                        id="hs-uid-contacts-1"
                        value={uid}
                        onChange={(e) => setuid(e.target.value)}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="University Id"
                      />
                    </div>

                    <div>
                      <label htmlFor="hs-about-contacts-1" className="sr-only">
                        Details
                      </label>
                      <textarea
                        id="hs-about-contacts-1"
                        name="hs-about-contacts-1"
                        rows="4"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Details"
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-4 grid">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Send inquiry
                    </button>
                  </div>

                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-500">
                      We'll get back to you in 1-2 business days.
                    </p>
                  </div>
                </form>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="divide-y divide-gray-200 dark:divide-gray-800"
              >
                <div className="flex gap-x-7 py-6">
                  <svg
                    className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <div className="grow">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      Email us
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Send us an email at
                    </p>
                    <a
                      className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="mailto:uprep@chitkarauniversity.edu.in"
                    >
                      uprep@chitkarauniversity.edu.in
                      <svg
                        className="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex gap-x-7 py-6">
                  <svg
                    className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                  <div className="grow">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      Location
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Chitkara University , Atal Shikasha Kunj , Kalujhinda ,
                      Baddi - 174103
                    </p>
                  </div>
                </div>

                <div className=" flex gap-x-7 py-6">
                  <svg
                    className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                  </svg>
                  <div className="grow">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      Social Media
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Follow us on</p>
                    <div className="mt-3 space-x-2">
                      <a
                        className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                        href="https://www.instagram.com/chitkarau/?hl=en"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 48 48"
                        >
                          <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path>
                        </svg>
                      </a>
                      <a
                        className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                        href="https://x.com/ChitkaraU"
                        target="_blank"
                      >
                        <svg
                          className="flex-shrink-0 w-3.5 h-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </a>
                      <a
                        className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                        href="https://www.chitkarauniversity.edu.in/"
                        target="_blank"
                      >
                        <svg
                          className="flex-shrink-0 w-3.5 h-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="bg-white scroll-smooth dark:bg-gray-900 mx-auto  items-center justify-center flex">
        <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center">
            <div>
              <a
                className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
                aria-label="Brand"
              >
                PrepHelp
              </a>
            </div>

            <div className="mt-3">
              <p className="text-gray-500">
                We're part of the{" "}
                <a
                  className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
                  href="#"
                >
                  Chitkara{" "}
                </a>{" "}
                University.
              </p>
              <p className="text-gray-500">
                © PrepHelp . {new Date().getFullYear()} Chitkara University. All
                rights reserved.
              </p>
            </div>

            <div className="mt-3 space-x-2">
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                href="https://www.instagram.com/chitkarau/?hl=en"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 48 48"
                >
                  <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path>
                </svg>
              </a>
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                href="https://x.com/ChitkaraU"
                target="_blank"
              >
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                href="https://www.chitkarauniversity.edu.in/"
                target="_blank"
              >
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                </svg>
              </a>
              <a
                className="inline-flex justify-center items-center w-auto h-10 px-4 text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                href="/dev-team"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.9 0-8 2-8 6v2h16v-2c0-4-4.1-6-8-6zm6-10c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm-6 12c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm-6 0c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z" />
                </svg>
                <span className="text-sm font-medium">Developer Team</span>
              </a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default LandingPage;
