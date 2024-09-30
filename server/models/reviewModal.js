const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: true,
  },
  name:{
    type:String,
    required:true
  },
  position:{
    type:String,
    required:true
  },
  isApproved:{
    type:Boolean,
    default:false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Review", reviewSchema);
