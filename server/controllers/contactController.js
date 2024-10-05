const Contact = require("../models/contactModel.js");

const storeContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ status: 201, message: "Response recorded" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};
const getContactList = async (req, res) => {
  try {
    const contact = await Contact.find();
    // console.log(contact)
    const reversedContact = contact.reverse();
    
    res.status(200).json({ status: 200, data: reversedContact });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

module.exports = { storeContact, getContactList };
