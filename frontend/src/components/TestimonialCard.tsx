
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

export default function TestimonialCard({ name, role, company, testimonial, image }: TestimonialCardProps) {
  return (
    <div className="overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="px-8 py-12">
        <div className="relative w-24 h-24 mx-auto">
          <img 
            className="relative object-cover w-24 h-24 mx-auto rounded-full"
            src={image}
            alt={name}
          />
          <div className="absolute top-0 right-0 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full w-7 h-7">
            <Quote className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <blockquote className="mt-7">
          <p className="text-lg text-gray-800 leading-relaxed">{testimonial}</p>
        </blockquote>
        
        <div className="mt-9 text-center">
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          <p className="mt-1 text-base text-gray-600">{role} at {company}</p>
        </div>
      </div>
    </div>
  );
}