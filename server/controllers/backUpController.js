const expModel = require("../models/expModel");
const xlsx = require("xlsx");
const fs = require("fs")
const getBackUp = async (req, res) => {
  try {
    const data = await expModel.find({});
    return res.status(201).send({
      message: "Data send Successfully",
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching approved reviews", error });
  }
};

const uploadBackUp = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const workBook = xlsx.readFile(file.path);
    const sheetName = workBook.SheetNames[0];
    const xlsxData = xlsx.utils.sheet_to_json(workBook.Sheets[sheetName]);
    const saveData = xlsxData.map((data) => ({
      date: data.date || [],
      company: data.company,
      role: data.role,
      gotOffer: data.gotOffer,
      location: data.location,
      rounds: data.rounds,
      batch: data.batch,
      name: data.name,
      email: data.email,
      universityID: data.universityID,
      mobileNo: data.mobileNo,
      linkedin: data.linkedin,
      cgpa: data.cgpa,
      question: data.question,
      eligibility: data.eligibility,
      preparationTips: data.preparationTips,
      mistakes: data.mistakes,
      techQuestions: data.techQuestions || [],
      interviewPrep: data.interviewPrep,
      othercompany: data.othercompany,
      isApproved: data.isApproved || false,
      expyr: data.expyr || 0,
      hrQuestions: data.hrQuestions || [],
      ipSubjects: data.ipSubjects || [],
      groupDiscussion: data.groupDiscussion || [],
      image:
        data.image ||
        "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
    }));

    await expModel.insertMany(saveData);

    fs.unlink(file.path, (err) => {
      if (err) {
        console.error("Error deleting the file: ", err);
      } else {
        console.log("File deleted successfully");
      }
    });

    res
      .status(200)
      .json({
        message:
          "Data successfully uploaded, saved to database, and file deleted",
      });
  } catch (error) {
    console.log("Error" + error)
    res.status(500).json({ message: "Error uploading and saving data", error });
  }
};

module.exports = { getBackUp, uploadBackUp };
