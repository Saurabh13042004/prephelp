import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function PlacementPlatformLandingPage() {
  return (
    <>
      {/* Navbar component */}
      <Navbar />

      {/* Body */}
      <body className="font-Poppins bg-white text-black">
        {/* Hero Section */}
        <section className="relative flex items-center h-screen">
          {/* Text Content */}
          <div className="container flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:w-3/4 lg:w-1/2">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Elevate Your Career with Our Placement Platform
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl">
                Connect with top companies, explore exciting opportunities, and take the next step in your professional journey.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:block w-full lg:w-1/2">
            <img
              className="object-cover w-full h-full"
              src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=996&t=st=1702496765~exp=1702497365~hmac=ad43286c7bd9f7f93cb4a82e808d51f4bc5943c367c8a95b9a6d1a9a56cb5a52"
              alt="Professional Work Environment"
            />
          </div>
        </section>

        {/* Body Content */}
        {/* ... (Your existing content) ... */}

        {/* Footer */}
        <Footer />
      </body>
    </>
  );
}

export default PlacementPlatformLandingPage;
