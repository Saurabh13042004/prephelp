const reviewModal = require("../models/reviewModal");

const uploadReview = async (req, res) => {
  const { review, name, position } = req.body;
  if (!review || !name || !position) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newReview = new reviewModal({ review, name, position });
    await newReview.save();
    res.status(200).json({ message: "Review submitted successfully" });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateReview = async (req, res) => {
  const { id } = req.query;
  try {
    const review = await reviewModal.findById(id);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    const updatedReview = await reviewModal.findByIdAndUpdate(
      id,
      { isApproved: !review.isApproved },
      { new: true }
    );

    res.status(200).json({
      message: `Review Updated successfully`,
      review: updatedReview,
    });
  } catch (error) {
    console.error("Error toggling review approval:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getReviewAdmin = async (req,res) => {
  try {
    const data = await reviewModal.find({});
    console.log(data)
    return res.status(201).send({
      message: "Send",
      data: data,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


const getReviewuser = async(req,res) =>{
  try {
    const reviews = await reviewModal.find({ isApproved: true });
    res.status(200).json({ data: reviews });
  } catch (error) {
    res.status(500).json({ message: "Error fetching approved reviews", error });
  }
}
module.exports = { uploadReview, updateReview, getReviewAdmin, getReviewuser };
