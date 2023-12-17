import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function Question() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getDocs(collection(db, 'formResponses'));
      const data = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setQuestions(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

const hrQuestions  = questions.hrQuestions;
const techQuestions = questions.techQuestions;
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow mb-4">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{hrQuestions}</h2>
        <p className="text-gray-600 mb-4">HR Interview Question</p>
        <p className="text-gray-500">Company: {questions.company}</p>

        Display whether it's a tech or non-tech question
        <p className="text-gray-500">{currentQuestion ? 'Tech Question' : 'Non-Tech Question'}</p>

        {/* Render HR or Technical Questions based on the type */}
        {currentQuestion ? (
          <div>
            <p className="font-semibold text-xl mt-4">Technical Question:</p>
            <p>{currentQuestion}</p>
          </div>
        ) : (
          <div>
            <p className="font-semibold text-xl mt-4">HR Question:</p>
            <p>{currentQuestion}</p>
          </div>
        )}

        {/* Render navigation buttons */}
        <div className="mt-4">
          <button
            onClick={handlePrevQuestion}
            disabled={currentQuestionIndex === 0}
            className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 transition duration-300 transform hover:scale-105 mx-2"
          >
            Previous
          </button>
          <button
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
            className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 transition duration-300 transform hover:scale-105 mx-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
