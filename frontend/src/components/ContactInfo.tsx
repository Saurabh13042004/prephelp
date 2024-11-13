import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactInfoCardProps {
  icon: React.ReactNode;
  items: string[];
}

function ContactInfoCard({ icon, items }: ContactInfoCardProps) {
  return (
    <div className="overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="p-6">
        <div className="w-12 h-12 mx-auto flex items-center justify-center text-indigo-600">
          {icon}
        </div>
        {items.map((item, index) => (
          <p key={index} className="mt-4 text-lg font-medium text-gray-800 text-center">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ContactInfoCard
        icon={<Phone className="w-8 h-8" />}
        items={['+1-316-555-0116', '+1-446-526-0117']}
      />
      <ContactInfoCard
        icon={<Mail className="w-8 h-8" />}
        items={['contact@prephelp.edu', 'support@prephelp.edu']}
      />
      <ContactInfoCard
        icon={<MapPin className="w-8 h-8" />}
        items={['Chitkara University', 'HP Campus, India']}
      />
    </div>
  );
}