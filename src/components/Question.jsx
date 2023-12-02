import React from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function Question({ question}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow mb-4">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{question.title}</h2>
        <p className="text-gray-600 mb-4">{question.category}</p>
        <p className="text-gray-500">Company: {question.company}</p>
      </div>
    </div>
  );
};

export default Question;