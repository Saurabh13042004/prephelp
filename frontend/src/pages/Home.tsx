import { Code, BookOpen, Brain, Building2, Lock, MessageSquare, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';
import StatCard from '../components/StatCard';
import ContactForm from '../components/ContactForm';
import TestimonialCard from '../components/TestimonialCard';
import ContactInfo from '../components/ContactInfo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left max-w-2xl">
              <div className="inline-flex px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
                <p className="text-xs font-semibold tracking-widest text-white uppercase">
                  Exclusive to Chitkara University
                </p>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Master Your <span className="gradient-text">Interview</span> Journey
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Your ultimate companion for campus placement preparation. Access real interview experiences, practice coding, and learn from peer success stories.
              </p>
              <div className="flex gap-6">
                <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg 
                  font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg 
                  hover:shadow-indigo-500/25 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold 
                  hover:bg-gray-50 transition-all shadow-lg border-2 border-transparent
                  hover:border-indigo-600">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Students preparing"
                className="rounded-2xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="section-padding bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center mb-16">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
              <p className="text-xs font-semibold tracking-widest text-white uppercase">
                Comprehensive Platform
              </p>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Access all the tools and resources you need to ace your placement interviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={BookOpen}
              title="Interview Experiences"
              description="Access real interview experiences shared by successful students"
            />
            <FeatureCard
              icon={Code}
              title="Code Editor"
              description="Practice coding problems in our integrated development environment"
            />
            <FeatureCard
              icon={Brain}
              title="Test Question Bank"
              description="Comprehensive collection of previous placement test questions"
            />
            <FeatureCard
              icon={Building2}
              title="Company-Wise Sorting"
              description="Find experiences and questions filtered by specific companies"
            />
            <FeatureCard
              icon={Lock}
              title="Secure Access"
              description="OTP validation ensures only Chitkara University students can access"
            />
            <FeatureCard
              icon={MessageSquare}
              title="AI Mock Interviews"
              description="Coming Soon: Practice with our AI-powered interview simulator"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Trusted by <span className="gradient-text">Successful</span> Students
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Hear from students who secured their dream placements using PrepHelp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Priya Sharma"
              role="Software Engineer"
              company="Microsoft"
              testimonial="PrepHelp's interview experiences helped me understand what to expect. The coding practice platform was invaluable for my technical rounds."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            />
            <TestimonialCard
              name="Rahul Verma"
              role="Product Manager"
              company="Amazon"
              testimonial="The company-specific sorting feature helped me focus my preparation. I could easily find relevant experiences and questions."
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            />
            <TestimonialCard
              name="Neha Patel"
              role="Data Scientist"
              company="Google"
              testimonial="The test question bank was comprehensive and helped me practice for aptitude rounds. The platform made my preparation journey smoother."
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard number="500+" label="Interview Experiences" />
            <StatCard number="50+" label="Partner Companies" />
            <StatCard number="1000+" label="Successful Placements" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Have questions? We're here to help you succeed
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <ContactInfo />
            <div className="mt-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                <div className="col-span-2">
                    <span className="text-2xl font-bold gradient-text">PrepHelp</span>
                    <p className="mt-4 text-gray-600">
                        Your ultimate companion for campus placement preparation at Chitkara University.
                    </p>
                </div>

                {[
                    {
                        title: 'Platform',
                        links: ['Features', 'Testimonials', 'Pricing', 'FAQ']
                    },
                    {
                        title: 'Company',
                        links: ['About', 'Careers', 'Blog', 'Contact']
                    },
                    {
                        title: 'Resources',
                        links: ['Documentation', 'Support', 'Terms', 'Privacy']
                    }
                ].map((section) => (
                    <div key={section.title}>
                        <h3 className="font-semibold text-gray-900">{section.title}</h3>
                        <ul className="mt-4 space-y-3">
                            {section.links.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="text-center text-gray-600">
                    <p>© 2024 PrepHelp. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>

    </div>
  );
}

export default App;