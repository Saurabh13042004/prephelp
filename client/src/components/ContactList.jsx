import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdminNavbar from "./AdminNavbar";

const ContactList = ({ isAuth, isAdmin }) => {
  return (
    <>
      {isAuth && isAdmin ? <AdminNavbar /> : <Navbar />}

      <Footer />
    </>
  );
};

export default ContactList;
