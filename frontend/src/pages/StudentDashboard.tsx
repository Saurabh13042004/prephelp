import React from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import {
  Briefcase,
  Trophy,
  Target,
  Code2,
  Brain,
  TrendingUp,
  CheckCircle2,
  Clock,
  Calendar1,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    { label: "Mock Interviews", value: "12", icon: Brain },
    { label: "Questions Solved", value: "156", icon: CheckCircle2 },
    { label: "Practice Hours", value: "48", icon: Clock },
    { label: "Interview Score", value: "85%", icon: TrendingUp },
  ];

  const upcomingInterviews = [
    { company: "Google", date: "2024-03-25", type: "Technical" },
    { company: "Microsoft", date: "2024-03-28", type: "HR" },
    { company: "Amazon", date: "2024-04-02", type: "System Design" },
  ];

  const recentExperiences = [
    {
      company: "Microsoft",
      role: "Software Engineer",
      date: "2024-03-15",
      author: "Sarah Parker",
      rating: 4.5,
    },
    {
      company: "Amazon",
      role: "SDE-1",
      date: "2024-03-14",
      author: "Mike Johnson",
      rating: 5,
    },
    {
      company: "Google",
      role: "Frontend Developer",
      date: "2024-03-13",
      author: "Alex Chen",
      rating: 4.8,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">Welcome back, John! 👋</h1>
          <p className="text-indigo-100 max-w-2xl">
            Ready to ace your next interview? You've completed 75% of your
            weekly goals. Keep up the great work!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-xl shadow-sm p-6 transition-transform hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <div className="h-12 w-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Interviews */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Upcoming Interviews</h2>
              <Calendar1 className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {upcomingInterviews.map((interview) => (
                <div
                  key={`${interview.company}-${interview.date}`}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <Briefcase className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{interview.company}</h3>
                    <p className="text-sm text-gray-600">
                      {interview.type} • {interview.date}
                    </p>
                  </div>
                  <Link
                    to="/mock-interview"
                    className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
                  >
                    Prepare
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Interview Experiences */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Experiences</h2>
              <div className="flex items-center space-x-4">
                <Link
                  to="/experiences"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  View all
                </Link>
                {/* Share Your Experience Link */}
                <Link
                  to="/student/experience/share"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Share your experience
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {recentExperiences.map((experience) => (
                <div
                  key={`${experience.company}-${experience.date}`}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{experience.company}</h3>
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">
                        {experience.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {experience.role}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {experience.author}</span>
                    <span>{experience.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/code-editor"
            className="group bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md"
          >
            <div className="h-12 w-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-100">
              <Code2 className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold mb-2">Practice Coding</h3>
            <p className="text-sm text-gray-600">
              Solve coding challenges and improve your problem-solving skills.
            </p>
          </Link>

          <Link
            to="/mock-interview"
            className="group bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md"
          >
            <div className="h-12 w-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-100">
              <Brain className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">AI Mock Interview</h3>
            <p className="text-sm text-gray-600">
              Practice with our AI interviewer and get instant feedback.
            </p>
          </Link>

          <Link
            to="/questions"
            className="group bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md"
          >
            <div className="h-12 w-12 bg-pink-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-100">
              <Target className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="font-semibold mb-2">Practice Questions</h3>
            <p className="text-sm text-gray-600">
              Access a curated list of interview questions and prepare
              effectively.
            </p>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
