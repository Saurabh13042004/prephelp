import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import BlogItem from "../components/BlogItem";
import Footer from "../components/Footer";
import axios from "axios"; 

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewData, setReviewData] = useState({
    review: "",
    name: "",
    position: ""
  }); 

  const handleChange = (e) => {
    setReviewData({
      ...reviewData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(reviewData);
      const response = await axios.post("http://localhost:8000/upload-review", reviewData);
      if (response.status === 200) {
        alert("Review submitted successfully");
        setIsModalOpen(false); 
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Write a Review</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={reviewData.name}
                  onChange={handleChange}
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="position" className="block text-gray-700 font-medium">
                  Your Position
                </label>
                <input
                  id="position"
                  name="position"
                  value={reviewData.position}
                  onChange={handleChange}
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your position"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="review" className="block text-gray-700 font-medium">
                  Your Review
                </label>
                <textarea
                  id="review"
                  name="review"
                  value={reviewData.review}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Write your review here"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="text-red-500 font-bold"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Navbar />
      <Top />
      <BlogItem />
      <Footer />
      <button
        className="fixed bottom-8 right-8 bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700"
        onClick={() => setIsModalOpen(true)}
      >
        Write a Review
      </button>
    </div>
  );
}

export default Home;
