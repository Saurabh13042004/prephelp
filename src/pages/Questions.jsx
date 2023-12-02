import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Question from '../components/Question';
import FooterPage from './FooterPage';
import Footer from '../components/Footer';

const questionsData = [
  {
    id: 1,
    title: 'How to implement a self join in SQL?',
    category: 'Tech',
    company: 'TechCo',
  },
  {
    id: 2,
    title: 'What are your favorite books?',
    category: 'Non-Tech',
    company: 'BookWorld',
  },
  // Add more questions as needed
];

function Questions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // Initialize to empty string
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const handleSearch = () => {
    const filtered = questionsData.filter((question) => {
      const categoryMatch =
        selectedCategory === '' || question.category === selectedCategory;
      const companyMatch =
        question.company.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && companyMatch;
    });

    setFilteredQuestions(filtered);
  };

  // Trigger the initial load of all questions
  useEffect(() => {
    handleSearch();
  }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <>
      <Navbar
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        searchQuery={searchQuery}
        onSearchSubmit={handleSearch}
        onSelectCategory={(category) => setSelectedCategory(category)}
        selectedCategory={selectedCategory}
      />
      <div className="bg-[#e5e7eb] min-h-screen flex flex-col items-center ">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-8">Questions</h1>
          <div className="mb-4">
            <label className="mr-2">Filter by Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mr-2 p-2 border border-gray-300"
            >
              <option value="">All</option>
              <option value="Tech">Tech</option>
              <option value="Non-Tech">Non-Tech</option>
            </select>
            <label className="mr-2">Filter by Company:</label>
            <input
              type="text"
              placeholder="Enter company name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 border border-gray-300"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Search
            </button>
          </div>
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question) => (
              <Question key={question.id} question={question} />
            ))
          ) : (
            <p>No questions found for the specified filters.</p>
          )}
        </div>
        <Footer className="w-full"/>
      </div>
      
    </>
  );
}

export default Questions;
