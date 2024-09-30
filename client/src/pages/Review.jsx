import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 10; // Display 10 reviews per page

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:8000/get-reviews-admin");
        setReviews(response.data.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  const toggleApproval = async (id, currentStatus) => {
    try {
      await axios.put("http://localhost:8000/update-review", null, {
        params: { id },
      });
      setReviews(
        reviews.map((review) =>
          review._id === id ? { ...review, isApproved: !currentStatus } : review
        )
      );
    } catch (error) {
      console.error("Error toggling approval:", error);
    }
  };

  // Pagination logic
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Reviews</h1>
        <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
          {currentReviews.length > 0 ? (
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Namew</th>
                  <th className="px-4 py-2">Review</th>
                  <th className="px-4 py-2">Position</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentReviews.map((review) => (
                  <tr key={review._id} className="border-b">
                     <td className="px-4 py-2 text-gray-700">{review.name}</td>
                    <td className="px-4 py-2 text-gray-700">{review.review}</td>
                    <td className="px-4 py-2 text-gray-700">{review.position}</td>
                    <td
                      className={`px-4 py-2 font-bold ${
                        review.isApproved ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {review.isApproved ? "Approved" : "Not Approved"}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() =>
                          toggleApproval(review._id, review.isApproved)
                        }
                        className={`py-2 px-4 font-semibold rounded-md shadow-md ${
                          review.isApproved
                            ? "bg-red-500 hover:bg-red-700 text-white"
                            : "bg-green-500 hover:bg-green-700 text-white"
                        }`}
                      >
                        {review.isApproved ? "Disapprove" : "Approve"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 text-center">No reviews found.</p>
          )}

          {/* Pagination Controls */}
          {reviews.length > reviewsPerPage && (
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePreviousPage}
                className={`py-2 px-4 font-semibold rounded-md shadow-md bg-blue-500 hover:bg-blue-700 text-white ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <p className="text-gray-700">
                Page {currentPage} of {totalPages}
              </p>
              <button
                onClick={handleNextPage}
                className={`py-2 px-4 font-semibold rounded-md shadow-md bg-blue-500 hover:bg-blue-700 text-white ${
                  currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Review;
