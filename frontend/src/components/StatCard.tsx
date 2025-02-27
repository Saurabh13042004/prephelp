

interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 
        group-hover:opacity-40 transition-opacity duration-300" />
      <div className="relative bg-white rounded-lg p-8 text-center transform hover:-translate-y-1 transition-transform duration-300">
        <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          {number}
        </div>
        <div className="text-gray-600 font-medium">{label}</div>
      </div>
    </div>
  );
}