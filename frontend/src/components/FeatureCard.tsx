
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
      hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 
        transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      <div className="relative z-10">
        <div className="h-14 w-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg 
          flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
          <Icon className="h-7 w-7 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}