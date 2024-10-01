import React, { useRef } from "react";
import AdminNavbar from "../components/AdminNavbar";
import axios from "axios";
import * as XLSX from "xlsx";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const FileUpload = () => {
  const fileInputRef = useRef(null); // Use useRef to reference the file input

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const fileType = file.name.split(".").pop().toLowerCase();

    if (fileType !== "xlsx" && fileType !== "xls") {
      toast.error("Please upload an Excel file (.xlsx or .xls)", {
        position: "top-right",
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      const data = await axios.post(
        "http://localhost:8000/upload-backup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // console.log(data);
      toast.success(data.data.message, {
        position: "top-left",
      });
      fileInputRef.current.value = "";
    } catch (error) {
      fileInputRef.current.value = "";
      toast.error("Error uploading file. Please try again.", {
        position: "top-left",
      });
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-md shadow-md w-full md:w-1/2">
      <ToastContainer
        position="top-left"
        autoClose={1100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <h2 className="text-xl font-semibold mb-4">Upload Backup File</h2>
      <input
        type="file"
        ref={fileInputRef} // Reference the input element
        className="block w-full text-sm text-gray-500 
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-indigo-50 file:text-indigo-700
          hover:file:bg-indigo-100"
        onChange={handleFileUpload}
      />
    </div>
  );
};

const BackupDownload = () => {
  const handleBackupDownload = async () => {
    try {
      const data = await axios.get("http://localhost:8000/take-backup");
      console.log(data.data.data);

      const worksheet = XLSX.utils.json_to_sheet(data.data.data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "BackupData");

      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      const blob = new Blob([excelBuffer], {
        type: "application/octet-stream",
      });
      const element = document.createElement("a");
      element.href = URL.createObjectURL(blob);
      element.download = "backup.xlsx";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } catch (error) {
      console.error("Error fetching backup data: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-md shadow-md w-full md:w-1/2 mt-6">
      <h2 className="text-xl font-semibold mb-4">Download Backup File</h2>
      <button
        onClick={handleBackupDownload}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200 ease-in-out"
      >
        Backup and Download Excel
      </button>
    </div>
  );
};

const BackupPage = () => {
  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
        {/* File Upload Section */}
        <FileUpload />

        {/* Backup Download Section */}
        <BackupDownload />
      </div>
    </>
  );
};

export default BackupPage;
