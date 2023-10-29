import { FaLink } from 'react-icons/fa'
import { ImBin } from 'react-icons/im'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import Loader from '../components/Loader';



function Admin() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData  = async ()=>{
    setLoading(true);
    try{
      const response = await getDocs(collection(db,'formResponses'));
      const data = [];
      response.forEach((doc)=>{
        data.push({id:doc.id,...doc.data()});
      });
      setPosts(data);
      console.log(data);
    } catch(error){
      console.log(error);
    }
    setLoading(false);
  }
  const handleCheckboxChange = async (e, id) => {
    const docRef = doc(db, 'formResponses', id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    const newData = { ...data, isApproved: !e.target.checked };
    await setDoc(docRef, newData);
    fetchData();
  }
  useEffect(()=>{
    document.title = "Admin Panel";
    fetchData();
  },[]);

  return (
    <div>
    <div className="overflow-x-auto m-auto p-4">
  <table className="table">
    {/* head */}
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
      { loading ? (<Loader/>) :  posts.map((entry)=>(
      <tr className='' key={entry.id}>

      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="Avatar " />
            </div>
          </div>
          <div>
            <div className="font-bold">{entry.firstName} {entry.lastName}</div>
            <div className="text-sm opacity-50">{entry.company} </div>
          </div>
        </div>
      </td>
      <td>
      <FaLink/>
  
      </td>
      <td>      <span className="badge badge-ghost badge-sm">{entry.isApproved ? 'Active' : 'Inactive'}</span></td>
      <td>
      <input type="checkbox" className="toggle" checked={entry.isApproved} onChange={(e) => handleCheckboxChange(e, entry.id)} />
      </td>
      <th>
      <ImBin  size={19}/>
      </th>
    </tr>
      ))}

  
    </tbody>    
  </table>
</div>
    


    
    </div>
  )
}

export default Admin