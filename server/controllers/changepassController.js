const nodemailer = require("nodemailer");
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const otpGenerate = async (userEmail) => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    const transporter = await nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "uprep@chitkarauniversity.edu.in",
        pass: "rjqs djto ojrb mvdt",
      },
    });

    // Create the email body with HTML
    const mailOptions = {
      from: {
        name: "uprep-team",
        address: "uprep@chitkarauniversity.edu.in",
      },
      to: userEmail,
      subject: "Verify Your Login",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 10px; border: 1px solid #dcdcdc; border-radius: 10px;">
          <h2 style="text-align: center; color: #333;">Verify Your Login - ${userEmail}</h2>
          <p style="color: #333;">Dear ${userEmail},</p>
          <p>Use OTP <strong>${otp}</strong> to log in to your account.</p>
          <p>OTP valid for 15 minutes from the time of generation.</p>
          <p style="text-align: center; color: #555;">Powered by Chitkara</p>
          <p style="text-align: center;"><a href="https://www.chitkara.edu.in" style="color: #ff0000; text-decoration: none;">www.chitkara.edu.in</a></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return otp;
  } catch (error) {
    return error.message;
  }
};
const changePass = async (req, res) => {
  try {
    const email = req.body.email;
    const findEmail = await userModel.findOne({ email: email });
    if (!findEmail) {
      return res.status(200).send({
        message: "User dont exist",
        success: false,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hassPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hassPassword;
    await userModel.findOneAndUpdate(
      { email: email },
      { password: req.body.password }
    );
    return res.status(200).send({
      message: "Change password succesfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
      success: false,
    });
  }
};

const passChangeAfterLogin = async (req, res) => {
  try {
    // console.log(req.body)
    const email = req.body.email;
    const findEmail = await userModel.findOne({ email: email });
    if (!findEmail) {
      return res.status(200).send({
        message: "User dont exist",
        success: false,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hassPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hassPassword;
    await userModel.findOneAndUpdate(
      { email: email },
      { password: req.body.password }
    );
    return res.status(200).send({
      message: "Change password succesfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
      success: false,
    });
  }
};
module.exports = { otpGenerate, changePass, passChangeAfterLogin };
