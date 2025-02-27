import  { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Camera, Save, Lock, Brain, FileText, User } from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'interviews', label: 'Mock Interviews', icon: Brain },
    { id: 'results', label: 'Results', icon: FileText },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="h-32 w-32 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
                <Camera className="h-5 w-5" />
              </button>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-gray-600">Computer Science & Engineering</p>
              <p className="text-sm text-gray-500">Chitkara University</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="border-b">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'profile' && (
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      defaultValue="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      defaultValue="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                      defaultValue="john.doe@chitkarauniversity.edu.in"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      defaultValue="+91 98765 43210"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      rows={4}
                      defaultValue="Computer Science student passionate about web development and artificial intelligence."
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Save className="h-5 w-5 mr-2" />
                    Save Changes
                  </button>
                </div>
              </form>
            )}

            {activeTab === 'security' && (
              <form className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Save className="h-5 w-5 mr-2" />
                    Update Password
                  </button>
                </div>
              </form>
            )}

            {activeTab === 'interviews' && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Recent Mock Interviews</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((interview) => (
                      <div
                        key={interview}
                        className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
                      >
                        <div>
                          <p className="font-medium">Technical Interview #{interview}</p>
                          <p className="text-sm text-gray-600">March {10 + interview}, 2024</p>
                        </div>
                        <button className="px-4 py-2 text-sm text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100">
                          View Report
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'results' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="text-green-800 font-medium mb-2">Technical Skills</h4>
                    <p className="text-3xl font-bold text-green-600">85%</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="text-blue-800 font-medium mb-2">Communication</h4>
                    <p className="text-3xl font-bold text-blue-600">92%</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="text-purple-800 font-medium mb-2">Problem Solving</h4>
                    <p className="text-3xl font-bold text-purple-600">78%</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Performance History</h3>
                  {/* Add a chart or detailed performance metrics here */}
                  <p className="text-gray-600">Detailed performance metrics will be displayed here.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

