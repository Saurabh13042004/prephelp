import React, { useState } from 'react';
import Navbar from './Navbar';
import Content from './Content';

function MainContent() {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to handle comments, e.g., save to a database
    if (comment.trim() !== '') {
      // You can handle the comments as needed (e.g., save to a database)
      alert('Comment submitted: ' + comment);
      setComment('');
    }
  };

  return (
    <div>
      <Navbar />
      <Content />
      <div className='mx-[12%] my-8'>
        <div className='mb-8'>
          <h2 className='font-semibold text-2xl mb-2'>Eligibility Criteria</h2>
          <p>CGPA above 7.0 and above 60% in 10th and 12th boards.</p>
        </div>

        <div className='mb-8'>
          <h2 className='font-semibold text-2xl mb-2'>Preparation Tips</h2>
          <p>
            Complete DSA and all the core subjects like OOPs and system design,
            and also keep projects ready.
          </p>
        </div>

        <div className='mb-8'>
          <h2 className='font-semibold text-2xl mb-2'>
            What you did Wrong/Right during the selection process?
          </h2>
          <p>
            I was rejected in the technical round where I am unable to solve
            one of the 2 questions given in the technical round.
          </p>
        </div>

        <div className='mb-8'>
          <h2 className='font-semibold text-2xl mb-2'>HR Questions Asked</h2>
          <p>
            1. Describe your 1st project that you mentioned in the resume, like
            what technology is used, how the project works, and its area of
            application.
          </p>
          <p>
            2. Describe your 1st project that you mentioned in the resume, like
            what technology is used, how the project works, and its area of
            application.
          </p>
        </div>

        <div className='mb-8'>
          <h2 className='font-semibold text-2xl mb-2'>Technical Questions Asked</h2>
          <p>
            1. Describe your 1st project that you mentioned in the resume, like
            what technology is used, how the project works, and its area of
            application.
          </p>
          <p>
            2. Describe your 1st project that you mentioned in the resume, like
            what technology is used, how the project works, and its area of
            application.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-2xl mb-4 text-gray-800'>
            Discussion Section
          </h2>
          <p className='text-gray-700 mb-4'>
            Share your thoughts and experiences. Discuss any additional tips or
            questions related to this interview experience.
          </p>
          <div className='bg-gray-100 p-4 rounded-md'>
            <h3 className='text-xl font-semibold mb-2 text-orange-500'>
              Discussion Forum
            </h3>
            <form onSubmit={handleCommentSubmit}>
              <label className='block text-gray-700 text-sm font-semibold mb-2'>
                Your Comment:
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className='resize-none border rounded-md w-full py-2 px-3 mb-4'
                placeholder='Share your thoughts...'
              ></textarea>
              <button
                type='submit'
                className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600'
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
