import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import DashboardLayout from "../components/DashboardLayout";
import ExperienceCard from "../components/ExperienceCard";

const experiences = [
  {
    id: 1,
    company: "Google",
    role: "Software Engineer",
    date: "2024-03-15",
    author: "Sarah Parker",
    rating: 4.5,
    content:
      "The interview process was challenging but fair. They asked several algorithm questions and a system design problem.",
    tags: ["Algorithms", "System Design", "Behavioral"],
  },
  {
    id: 2,
    company: "Amazon",
    role: "SDE-1",
    date: "2024-03-14",
    author: "Mike Johnson",
    rating: 5,
    content:
      "Amazon's interview was intense. Be prepared for behavioral questions and coding challenges. They focus a lot on their leadership principles.",
    tags: ["Coding", "Leadership Principles", "Behavioral"],
  },
  {
    id: 3,
    company: "Microsoft",
    role: "Frontend Developer",
    date: "2024-03-13",
    author: "Alex Chen",
    rating: 4.8,
    content:
      "The interview at Microsoft was a great experience. They asked about my past projects and gave me a real-world problem to solve.",
    tags: ["Frontend", "Problem Solving"],
  },
];

function InterviewExperience() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");

  const filteredExperiences = experiences.filter(
    (exp) =>
      (exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCompany === "all" || exp.company === selectedCompany) &&
      (selectedTag === "all" || exp.tags.includes(selectedTag))
  );

  const allTags = Array.from(new Set(experiences.flatMap((exp) => exp.tags)));

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">
            See what others have to say about their interview experiences! 👀
          </h1>
          <p className="text-indigo-100 max-w-2xl">
            Read about the experiences of other students who have interviewed
            with top tech companies.
          </p>

          {/* Share Experience Button */}
          <div className="mt-4">
            <Link
              to="/student/experience/share"
              className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-md font-semibold hover:bg-indigo-50 transition-colors"
            >
              Share Your Experience
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Search */}
          <div className="w-full md:w-2/3">
            <input
              type="text"
              placeholder="Search by company, role, or content"
              className="w-full border border-gray-200 rounded-lg p-3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Company Select */}
          <div className="w-full md:w-1/3">
            <select
              className="w-full border border-gray-200 rounded-lg p-3"
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
            >
              <option value="all">All Companies</option>
              {experiences.map((exp) => (
                <option key={exp.company} value={exp.company}>
                  {exp.company}
                </option>
              ))}
            </select>
          </div>

          {/* Tag Select */}
          <div className="w-full md:w-1/3">
            <select
              className="w-full border border-gray-200 rounded-lg p-3"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="all">All Tags</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Experiences Grid */}
        <AnimatePresence>
          {filteredExperiences.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-10"
            >
              <p className="text-xl font-semibold text-gray-600">
                No experiences found
              </p>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filters
              </p>
            </motion.div>
          ) : (
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {filteredExperiences.map((experience) => (
                <motion.div
                  key={experience.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link to={`/experiences/${experience.id}`}>
                    <ExperienceCard experience={experience} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
}

export default InterviewExperience;
