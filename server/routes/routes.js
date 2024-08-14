const Route = require("express").Router();
const userController = require("../controllers/userController.js");
const expController = require("../controllers/expController.js");
const adminController = require("../controllers/adminController.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const contactController = require("../controllers/contactController.js");
const changepassController = require("../controllers/changepassController.js");
const multer = require("multer");
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const uniqueSuffix = file.mimetype.split("/");
    if (
      file.originalname.includes(".jpg") ||
      file.originalname.includes(".jpeg") ||
      file.originalname.includes(".png")
    ) {
      cb(null, file.originalname);
    } else {
      cb(null, file.originalname + "-" + Date.now() + "." + uniqueSuffix[1]);
    }
  },
  destination: (req, file, cb) => {
    cb(null, "./profileUploads/");
  },
});
const upload = multer({ storage: storage });

Route.get("/", userController.Func);
Route.get(
  "/get-contact-list",
  authMiddleware,
  contactController.getContactList
);
Route.post("/signup", userController.signup);
Route.post("/login", userController.login);
Route.post("/experience", authMiddleware, expController.expData);
Route.get("/get-experience", authMiddleware, expController.getExp);
Route.post("/adminlogin", authMiddleware, userController.adminlogin);
Route.get("/get-experience-question", authMiddleware, expController.getQues);
Route.get("/admin-users", authMiddleware, adminController.getUsers);
Route.put(
  "/admin-update-approved",
  authMiddleware,
  adminController.updateApproved
);
Route.put(
  "/admin-update-allfield",
  authMiddleware,
  adminController.updateField
);
Route.post("/contact", authMiddleware, contactController.storeContact);
Route.post("/verifyEmail", userController.generateOtpFunc);
Route.post("/getUserDetails", userController.getUserDetails);
Route.post("/changePassword", authMiddleware, changepassController.changePass);
Route.post("/checkUserExists", userController.checkUserExists);
Route.post("/compareotp", userController.compareotp);
Route.post(
  "/changePassword-afterlogin",
  authMiddleware,
  changepassController.passChangeAfterLogin
);
Route.put("/add-admin", authMiddleware, userController.addadmin);
Route.post("/check-email", authMiddleware, userController.checkEmail);
Route.put("/edit-name", authMiddleware, userController.changeName);
Route.post("/profile-image", upload.any(), userController.profileImage);
Route.get(
  "/send-profile-image/profileUploads/:imgName",
  userController.sendProfileImage
);
Route.post("/get-exp", authMiddleware, userController.getExp);
Route.put("/update-user-exp", authMiddleware, userController.editExpUser);
Route.post("/admin-delete/:_id", authMiddleware, adminController.deleteUser);

module.exports = Route;
