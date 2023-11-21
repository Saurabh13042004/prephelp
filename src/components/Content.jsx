import React from 'react';
import { FaEye } from "react-icons/fa";

function Content() {

  // const [commentsVisible, setCommentsVisible] = useState(false);
  

  // const [comments, setComments] = useState([
    
  // ]);

  // const [newComment, setNewComment] = useState({
  //   name: '',
  //   text: '',
  // });

  // const handleInputChange = (e) => {
  //   setNewComment({
  //     ...newComment,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleAddComment = () => {
  //   if (newComment.name && newComment.text) {
  //     setComments([
  //       ...comments,
  //       {
  //         id: comments.length + 1,
  //         name: newComment.name,
  //         text: newComment.text,
  //       },
  //     ]);
      
  //     setNewComment({
  //       name: '',
  //       text: '',
  //     });
  //   }
  // };



  // return (
  //   <div className='py-5 my-5'>
  //     <div className="max-w-[85%] mx-auto bg-white rounded-lg overflow-hidden shadow-lg mt-8">
  //       <div className="p-4 flex items-center">
  //         <div className="bg-gray-300 w-16 h-16 rounded-full overflow-hidden">
  //           <img
  //             className="w-full h-full object-cover"
  //             src="path_to_your_profile_pic.jpg"
  //             alt="Profile"
  //           />
  //         </div>
  //         <div className="ml-4">
  //           <p className="text-xl font-semibold">Saurabh shukla</p>
  //           <p className="text-gray-600">
  //             mai Madarchod hu....Mai hi to hu Madarchod ...Mere se Bara Madarchod koi nii h
  //           </p>
  //         </div>
  //       </div>

  

        
  //       <div className="p-4">
  //         <h2 className="text-lg font-semibold mb-2">Comments:</h2>

  //         {commentsVisible && (
  //           <div>
  //             {comments.map((comment) => (
  //               <div key={comment.id} className="flex items-center mb-2">
  //                 <div className="bg-gray-300 w-10 h-10 rounded-full overflow-hidden">
  //                   <img
  //                     className="w-full h-full object-cover"
  //                     src="path_to_commenter_pic.jpg"
  //                     alt="Commenter"
  //                   />
  //                 </div>
  //                 <div className="ml-2">
  //                   <p className="text-sm font-semibold">{comment.name}</p>
  //                   <p className="text-sm text-gray-600">{comment.text}</p>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         )}

 
  //         <div className="flex items-center mt-4">
  //           <input
  //             type="text"
  //             name="name"
  //             placeholder="Your Name"
  //             value={newComment.name}
  //             onChange={handleInputChange}
  //             className="mr-2 px-2 py-1 border border-gray-300 rounded"
  //           />
  //           <input
  //             type="text"
  //             name="text"
  //             placeholder="Add a comment..."
  //             value={newComment.text}
  //             onChange={handleInputChange}
  //             className="flex-grow mr-2 px-2 py-1 border border-gray-300 rounded"
  //           />
  //           <button
  //             onClick={handleAddComment}
  //             className="bg-blue-500 text-white px-4 py-2 rounded"
  //           >
  //             Add Comment
  //           </button>
  //         </div>

         
  //         <button
  //           onClick={() => setCommentsVisible(!commentsVisible)}
  //           className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded"
  //         >
  //           {commentsVisible ? 'Hide Comments' : 'Show Comments'}
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className='py-5 my-5 '>
      <div className="max-w-[85%] mx-auto bg-white rounded-lg overflow-hidden shadow-lg mt-8 p-2 ">
        {/* Title block */}
        <div className="p-4 flex items-center">
          <div className="bg-gray-300 w-16 h-16 rounded overflow-hidden">
            {/* Company logo */}
            <img
              className="w-full h-full object-cover "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
              alt="Company Logo"
            />
          </div>
          <div className="ml-4">
            {/* Title with company name and position */}
            <p className="text-xl font-semibold">Microsoft | Software Developer | Fresher </p>
            {/* Subtitle with number of rounds */}
            <p className="text-gray-600 font-bold">3 Rounds | 6 Coding Problems</p>
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
            <p className="text-">Saurabh Shukla</p>
            {/* Subtitle with university and batch */}
            <p className="text-gray-600 text-sm">2021 Batch | Chitkara University</p>
          </div>
          <div className="ml-auto flex">
            {/* Selected icon with green tick */}
            {/* <img
              className="w-6 h-6"
              src="https://img1.pnghut.com/20/24/13/AUYaPbGumU/brand-logo-text-green-leaf.jpg"
              alt="Selected"
            /> */}
            <p className='text-red-900 font-bold'>Selected</p>
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
    </div>
  );
}

export default Content;
