import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Get in Touch
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            required
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold
            hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>
    </div>
  );
}