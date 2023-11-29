import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Loader from './Loader';

const getCompanyLogo = (company) => {
  switch (company) {
    case 'Microsoft':
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png';
    case 'Google':
      return 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png';
    case 'Adobe':
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/1200px-Adobe_Acrobat_DC_logo_2020.svg.png';
    default:
      return 'https://files.codingninjas.in/company-25223.svg';
  }
};

function BlogItem() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedPosts, setSearchedPosts] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getDocs(collection(db, 'formResponses'));
      const data = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(data);
      setSearchedPosts(data); // Set the initial state for searchedPosts
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredPosts = posts.filter((post) =>
      post.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedPosts(filteredPosts);
  };

  return (
    <>
      <div className="flex items-center mb-4 ml-[8%]">
        <input
          type="text"
          placeholder="Search by company name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mr-2"
        />
        <button onClick={handleSearch} className="bg-slate-900 text-white p-2 rounded-md ml-10 px-2">
          Search
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : (
        searchedPosts.map((post) => (
          post.isApproved && (
            <div className="py-3" key={post.id}>
              <Link to={`/post/${post.id}`}>
                <div className="max-w-[85%] mx-auto bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow mt-8 p-2 ">
                  {/* Title block */}
                  <div className="p-4 flex items-center">
                    <div className="w-14 h-14 rounded overflow-hidden">
                      <img
                        className="w-full h-full object-cover "
                        src={getCompanyLogo(post.company)}
                        alt="Company Logo"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-xl font-semibold">
                        {post.company} | {post.role} | Fresher
                      </p>
                      <p className="text-gray-600 font-bold">
                        {post.rounds} Rounds | 6 Coding Problems
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 my-2"></div>
                  {/* Profile block */}
                  <div className="px-4 py-2 flex items-center">
                    <div className="bg-gray-300 w-12 mx-2 h-12 rounded-full overflow-hidden">
                      <img
                        className="w-full  h-full object-cover"
                        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                        alt="Profile"
                      />
                    </div>
                    <div className="ml-4 px-1">
                      <p className="text-">{post.name}</p>
                      <p className="text-gray-600 text-sm">
                        {post.batch} Batch | Chitkara University
                      </p>
                    </div>
                    <div className="ml-auto flex">
                      <p className="text-red-900 font-bold">
                        {post.gotOffer === 'yes' ? 'Selected' : 'Rejected'}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        ))
      )}
    </>
  );
}

export default BlogItem;
