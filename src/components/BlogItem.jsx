import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { db } from '../firebase';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import Loader from './Loader';

import { useState, useEffect } from 'react';

function BlogItem() {
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
    { loading ? (<Loader/>) : (
      posts.map((post) => post.isApproved ? (
        <div className='py-3' key={post.id}>
          <Link to={`/post/${post.id}`}>
        <div className="max-w-[85%] mx-auto bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow mt-8 p-2 ">
  
          {/* Title block */}
          <div className="p-4 flex items-center">
            <div className=" w-14 h-14 rounded overflow-hidden">
              {/* Company logo */}
              <img
                className="w-full h-full object-cover "
                src={post.company === 'Microsoft' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png' : post.company === 'Google' ? 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png' :  post.company === 'Adobe' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/1200px-Adobe_Acrobat_DC_logo_2020.svg.png': 'https://files.codingninjas.in/company-25223.svg'}
                alt="Company Logo"
              />
            </div>
            <div className="ml-4">
              {/* Title with company name and position */}
              <p className="text-xl font-semibold">{post.company} | {post.role} | Fresher </p>
              {/* Subtitle with number of rounds */}
              <p className="text-gray-600 font-bold">{post.rounds} Rounds | 6 Coding Problems</p>
            </div>
          </div>
          <div className="border-t border-gray-200 my-2"></div>
          {/* Profile block */}
          <div className="px-4 py-2 flex items-center">
            <div className="bg-gray-300 w-12 mx-2 h-12 rounded-full overflow-hidden">
              {/* Profile image */}
              <img
                className="w-full  h-full object-cover"
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                alt="Profile"
              />
            </div>
            <div className="ml-4 px-1">
              {/* Name with surname */}
              <p className="text-">{post.name}</p>
              {/* Subtitle with university and batch */}
              <p className="text-gray-600 text-sm">{post.batch} Batch | Chitkara University</p>
            </div>
            <div className="ml-auto flex">
              {/* Selected icon with green tick */}
              {/* <img
                className="w-6 h-6"
                src="https://img1.pnghut.com/20/24/13/AUYaPbGumU/brand-logo-text-green-leaf.jpg"
                alt="Selected"
              /> */}
              <p className='text-red-900 font-bold'>{post.gotOffer === 'yes' ? 'Selected' : 'Rejected'}</p>
            </div>
          </div>
  
          {/* Horizontal line */}
          {/* <div className="border-t border-gray-200 my-2"></div> */}
  
          {/* Number of views and comments */}
          {/* <div className="flex justify-between text-sm text-gray-600 px-4 py-2">
            <p className='flex gap-3'> <span><FaEye /></span>  10 views</p>
            <p>5 comments</p>
          </div> */}
        </div>
        </Link>
      </div>

      ): null )
    )}
    
    </>



  );
}

export default BlogItem;