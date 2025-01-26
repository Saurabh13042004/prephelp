import React from "react"
import { Briefcase, Star } from "lucide-react"

interface Experience {
  id: number
  company: string
  role: string
  date: string
  author: string
  rating: number
  content: string
  tags: string[]
}

interface ExperienceCardProps {
  experience: Experience
}

// A simple Badge component. You can style or extend it as you like.
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-800">
      {children}
    </span>
  )
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex flex-row items-center justify-between   border-gray-200">
        <h2 className="text-lg font-bold">{experience.company}</h2>
        <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="ml-1 text-sm font-bold text-yellow-700">{experience.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-3">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Briefcase className="mr-1 h-4 w-4" />
          {experience.role}
        </div>
        <p className="text-sm mb-4 line-clamp-3">{experience.content}</p>

        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs text-gray-500 mt-4 pt-2 border-t border-gray-200">
        <span>By {experience.author}</span>
        <span>{experience.date}</span>
      </div>
    </div>
  )
}


export default ExperienceCard