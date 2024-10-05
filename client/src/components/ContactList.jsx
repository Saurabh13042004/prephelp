import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdminNavbar from "./AdminNavbar";
import DataTable from "react-data-table-component";
import Cookies from "universal-cookie";
import Modal from "react-modal";

const ContactList = ({ isAuth, isAdmin }) => {
  const [contacts, setContacts] = useState([]);
  const tableRef = useRef();
  const cookies = new Cookies();
  const [modalOpen, setModalOpen] = useState(false);
  const [particularContactData, setparticularContactData] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      let response = await fetch(
        `${import.meta.env.VITE_SERVER}/get-contact-list`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        }
      );
      response = await response.json();
      // console.log(response);
      setContacts(response?.data);
    };

    getContacts();
  }, []);

  const columns = [
    {
      name: "name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "message",
      selector: (row) => row.message,
      sortable: true,
    },
  ];
  const customStyles = {
    header: {
      style: {
        fontFamily: "Sans-serif",
        textAlign: "center",
        fontSize: "2rem",
        marginBottom: "1rem",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#f2f2f2",
        fontFamily: "Sans-serif",
      },
    },
    headCells: {
      style: {
        fontSize: "16px",
        fontFamily: "Sans-serif",
      },
    },
    rows: {
      style: {
        fontFamily: "baloo-bhai-2",
        fontSize: "20px",
      },
    },
    pagination: {
      style: {
        fontFamily: "Sans-serif",
      },
    },
  };
  const modalCustomStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#f2f2f2",
    },
  };

  function closeModal() {
    setModalOpen(false);
  }
  function openModal() {
    setModalOpen(true);
  }

  return (
    <>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalCustomStyles}
        contentLabel="Contact List Data"
      >
        <div className="relative flex flex-col">
          <button
            className="absolute -right-5 -top-5 bg-red-500 text-white p-1.5 font-semibold rounded"
            onClick={closeModal}
          >
            Close
          </button>
          <div>
            <div className="flex flex-col gap-3 text-lg">
              <div className="flex gap-2">
                <p className="font-semibold">Name:</p>
                <p>{particularContactData.name}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Uid:</p>
                <p>{particularContactData.uid}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Email:</p>
                <p>{particularContactData.email}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Message:</p>
                <p>{particularContactData.message}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {isAuth && isAdmin ? <AdminNavbar /> : <Navbar />}
      <div className="mt-14 p-12">
        <DataTable
          onRowClicked={(row) => {
            openModal();
            setparticularContactData(row);
          }}
          customStyles={customStyles}
          className="dataTables_wrapper"
          title="Contact List"
          columns={columns}
          data={contacts}
          fixedHeader
          pagination
          responsive
          highlightOnHover
          pointerOnHover
        />
      </div>
      <Footer />
    </>
  );
};

export default ContactList;
