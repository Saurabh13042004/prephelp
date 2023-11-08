import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

function Admin() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getDocs(collection(db, 'formResponses'));
      const data = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleCheckboxChange = async (e, id) => {
    const docRef = doc(db, 'formResponses', id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    const newData = { ...data, isApproved: !e.target.checked };
    await setDoc(docRef, newData);
    fetchData();
  };



  const handleEditClick = (entry) => {
    setSelectedPost(entry);
    setEditMode(true);
    document.getElementById('editModal').showModal();
  };

  const handleSaveEdit = async () => {
    const docRef = doc(db, 'formResponses', selectedPost.id);
    await setDoc(docRef, selectedPost);
    fetchData();
    setEditMode(false);
    document.getElementById('editModal').close();
  };

  const handleCloseModal = () => {
    document.getElementById('editModal').close();
  };

  useEffect(() => {
    document.title = 'Admin Panel';
    fetchData();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto m-auto p-4">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Post</th>
              <th>Status</th>
              <th>Display</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              posts.map((entry) => (
                <tr key={entry.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {entry.firstName} {entry.lastName}
                        </div>
                        <div className="text-sm opacity-50">{entry.company}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button onClick={() => handleEditClick(entry)}>Edit</button>
                  </td>
                  <td>
                    <span
                      className={`badge badge-ghost badge-sm ${entry.isApproved ? 'text-green-500' : 'text-red-500'}`}
                    >
                      {entry.isApproved ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="toggle"
                      checked={entry.isApproved}
                      onChange={(e) => handleCheckboxChange(e, entry.id)}
                    />
                  </td>
                  <td>
                    <button className="text-red-500" onClick={() => handleDelete(entry.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <dialog id="editModal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleCloseModal}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Edit the Response:</h3>
          <form>
            {selectedPost && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <textarea
                  type="text"
                  placeholder="First Name"
                  className="textarea h-10 textarea-bordered"
                  value={selectedPost.firstName}
                  onChange={(e) => setSelectedPost({ ...selectedPost, firstName: e.target.value })}
                />
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Last Name"
                  className="textarea h-10 textarea-bordered"
                  value={selectedPost.lastName}
                  onChange={(e) => setSelectedPost({ ...selectedPost, lastName: e.target.value })}
                />
                <label className="label">
                  <span className="label-text">Company</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Company"
                  className="textarea h-10 textarea-bordered"
                  value={selectedPost.company}
                  onChange={(e) => setSelectedPost({ ...selectedPost, company: e.target.value })}
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Email"
                  className="textarea h-10 textarea-bordered"
                  value={selectedPost.email}
                  onChange={(e) => setSelectedPost({ ...selectedPost, email: e.target.value })}
                />
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Phone"
                  className="textarea h-10 textarea-bordered"
                  value={selectedPost.phone}
                  onChange={(e) => setSelectedPost({ ...selectedPost, phone: e.target.value })}
                />
                <label className="label">
                  <span className="label-text">Experience</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Experience"
                  className="textarea h-24 textarea-bordered"
                  value={selectedPost.experience}
                  onChange={(e) => setSelectedPost({ ...selectedPost, experience: e.target.value })}
                />
                {selectedPost.technicalQuestions &&
                  selectedPost.technicalQuestions.map((question, index) => (
                    <div className="form-control" key={index}>
                      <label className="label">
                        <span className="label-text">{`Technical Question ${index + 1}`}</span>
                      </label>
                      <textarea
                        type="text"
                        placeholder={`Technical Question ${index + 1}`}
                        className="textarea h-10 textarea-bordered"
                        value={selectedPost.technicalQuestions[index]}
                        onChange={(e) => {
                          const updatedQuestions = [...selectedPost.technicalQuestions];
                          updatedQuestions[index] = e.target.value;
                          setSelectedPost({ ...selectedPost, technicalQuestions: updatedQuestions });
                        }}
                      />
                    </div>
                  ))
                }
              </div>
            )}
          </form>
          <button className="btn btn-primary mt-3" onClick={handleSaveEdit}>
            Save
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default Admin;
