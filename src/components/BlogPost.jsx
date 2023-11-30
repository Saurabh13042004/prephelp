import React, { useEffect, useState } from 'react';
import { useLocation, Link , useParams} from 'react-router-dom';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import Loader from './Loader';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { FaLinkedin } from 'react-icons/fa';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, 'formResponses', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPost({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching document: ', error);
    }
    setLoading(false);
  };


  useEffect(() => {
    fetchData();
  }, [id]);


  return (
    <>
      {loading ? (<Loader/>) : (

<div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
<div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 ">
  {/* Content */}
  <div className="lg:col-span-2">
    <div className="py-8 lg:pe-4 ">
      <div className="space-y-5 lg:space-y-8">
        <Link
          to="/"
          className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Home
        </Link>

        <h2 className="text-3xl font-bold lg:text-4xl">

          {post.company} | {post.role} | Fresher
       
        </h2>

        <div className="flex items-center gap-x-5">
          <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">

            {post.name}

         
          </span>
     
          <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">

            Batch {post.batch} | Chitkara University
       
          </p>
        </div>

        {/* Blog Content */}
        <div className=''>
        <p className="text-lg text-gray-800">
          {/* {post.content} */}
          My name is {post.name} . I am a undergraduate student at Chitkara University. I am currently in my {post.batch} batch. I have been selected for the role of {post.role} at {post.company}. Chitkara University  Placement Cell  has played a major role in my success. I would like to share my interview experience with you all. <br/> I hope it will help you in your preparation.

        </p>

        <p className='font-semibold text-lg text-gray-900 mt-5 mb-2'> Journey   </p>
        <p className="text-lg text-gray-800">
          {/* {post.content} */}
          I got to know about the placement drive through the Placement Cell of Chitkara University. I applied for the role of {post.role} at {post.company}. I was shortlisted for the interview round.  There were {post.rounds} rounds in total. I would like to share my interview experience with you all. I hope it will help you in your preparation.
        </p>  

        <p className='font-semibold text-lg text-gray-900 mt-5 mb-2'> Reason to be shortlisted    </p>
        <p className="text-lg text-gray-800">
          {/* {post.content} */}
        The eligibility criteria for the role was {post.eligibility}.
          I was shortlisted for the interview based on my resume. I had mentioned my projects, achievements and skills in my resume.
        </p>  
    

            <p className='font-semibold text-lg text-gray-900 mt-5 mb-2'> Preparation Topics   </p>
        <p className="text-lg text-gray-800">
          {/* {post.content} */}
          I prepared for the interview from the following topics: 
          <ul className='list-disc list-inside'>
            <li>Data Structures and Algorithms</li>
            <li>Programming Language : Java / C++ </li>
            <li>Operating System</li>
            <li>Database Management System</li>
            <li>Object Oriented Programming</li>
            <li>Software Engineering</li>
            <li>Computer Networks</li>
          </ul>

        </p>  

        <p className='font-semibold text-lg text-gray-900 mt-5 mb-2'> Preparation Tips   </p>
        <p className="text-lg text-gray-800">
          {/* {post.content} */}
          I would like to share some tips with you all. I hope it will help you in your preparation.
          <ul className='list-disc list-inside'>
            <li>{post.preparationTips}</li>
            <li>Start your preparation early.</li>
            <li>Practice coding questions on a regular basis.</li>
            <li>Practice previous year interview questions.</li>
            <li>Focus on your resume. Mention your projects, achievements and skills in your resume.</li>
          </ul>

        </p>  

        <p className='font-semibold text-lg text-gray-900 mt-5 mb-2'> HR Interview Round Questions   </p>
        <p className="text-lg text-gray-800">
          {/* {post.content} */}
          I would like to share some questions with you all. I hope it will help you in your preparation.
          <ul className='list-disc list-inside p-2'>
            {post.hrQuestions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}  
            
      
          </ul> 
          Prepare answers for these questions. This will help you in your preparation.

        </p>  
        <p className='font-semibold text-lg text-gray-900 mt-5 mb-2'> Technical  Interview Round Questions   </p>
        <p className="text-lg text-gray-800">
          {/* {post.content} */}
          I would like to share some technical questions which were asked in my interview. I hope it will help you in your preparation.
          <ul className='list-disc list-inside p-2'>
            {post.techQuestions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}  
            
      
          </ul> 
           Understand the contraints of the problem before writing the code. Try to code from brute force approach to optimised approach. This will help you in your preparation.


        </p>  
        <p className='text-lg text-gray-900 mt-5 mb-2'>  I was {post.gotOffer ? 'selected' : 'rejected' } for the role of {post.role} at {post.company}. I would like to thank Chitkara University Placement Cell for providing me this opportunity. I would also like to thank PrepHelp for providing me the platform to share my interview experience with you all. I hope it will help you in your preparation. All the best for your interviews.
         </p>

        </div>

        <div className="text-center">
          <div className="grid lg:grid-cols-2 gap-3">
            {/* {post.images.map((image, index) => (
              <figure key={index} className="relative w-full h-60">
                <img
                  className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                  src={image}
                  alt={`Image ${index + 1} Description`}
                />
              </figure>
            ))} */}
            {/* Add more images if needed */}
          </div>

          <span className="mt-3 block text-sm text-center text-gray-500">
            {/* {post.imageDescription} */}
          </span>
        </div>

        {/* More content... */}
      </div>
    </div>
  </div>

  {/* Sidebar */}
  <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
    <div className="sticky top-0 start-0 py-8 lg:ps-4 lg:ps-8">
      {/* Author Info */}
      <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
        <a className="block flex-shrink-0" href="#">
          <img
            className="h-10 w-10 rounded-full"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            alt="Author"
          />
        </a>
        <div className="flex flex-col">
          <a
            href="#"
            className="text-base font-medium text-gray-800  hover:underline"
          >
            {post.name}
            {/* {post.author} */}
          </a>
          <p className="text-xs text-gray-500">
            {/* {post.authorRole} */}
            {post.batch} Batch | Chitkara University
          </p>
        </div>
      </div>

      {/* More Sidebar Content... */}
      <p className='text-base text-gray-800'>
        Hey everyone, I am {post.name}. I am a undergraduate student at Chitkara University. I am currently in my {post.batch} batch.
        <br />
        If you have any queries regarding the interview process, you can contact me on my email id {post.email}.
        You can also connect with me on LinkedIn. 

        <br />


        <FaLinkedin className='inline-block text-2xl text-blue-500 hover:text-blue-700 cursor-pointer my-4' onClick={() => window.open(post.linkedin, '_blank')} />


            
      </p>
    </div>
  </div>
</div>
</div>
      )}
    </>
   
  );
};

export default BlogPost;
