import React from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {
    Briefcase,
    Star,
    Calendar,
    ArrowLeft,
    ThumbsUp,
    MessageSquare,
    Share2,
} from "lucide-react"
import DashboardLayout from "../components/DashboardLayout";

// =============== Custom/Minimal Tailwind Components ===============

// Minimal Button component
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "ghost" | "primary"
}

function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
    const baseClasses = "inline-flex items-center px-4 py-2 rounded text-sm font-medium"
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
    }

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

// Minimal Badge component
type BadgeProps = {
    children: React.ReactNode
    variant?: "secondary" | "default"
}

function Badge({ children, variant = "default" }: BadgeProps) {
    const badgeClasses =
        variant === "secondary"
            ? "bg-gray-100 text-gray-600 border border-gray-200"
            : "bg-gray-200 text-gray-800"
    return <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${badgeClasses}`}>{children}</span>
}

// Minimal Separator (horizontal rule) component
function Separator({ className }: { className?: string }) {
    return <hr className={`border-gray-200 ${className ?? ""}`} />
}

// Minimal Avatar components
type AvatarProps = {
    src?: string
    alt?: string
    fallback?: string
    className?: string
}

function Avatar({ src, alt, fallback, className = "" }: AvatarProps) {
    return (
        <div
            className={`relative flex items-center justify-center rounded-full bg-gray-200 overflow-hidden ${className}`}
        >
            {src ? (
                <img src={src} alt={alt} className="h-full w-full object-cover" />
            ) : (
                <span className="text-gray-500">{fallback}</span>
            )}
        </div>
    )
}

// =============== Mock Data ===============
interface Experience {
    id: number
    company: string
    role: string
    date: string
    author: string
    authorAvatar: string
    rating: number
    content: string
    tags: string[]
    likes: number
    comments: number
}

const experiences: Experience[] = [
    {
        id: 1,
        company: "Google",
        role: "Software Engineer",
        date: "2024-03-15",
        author: "Sarah Parker",
        authorAvatar: "/avatars/sarah.jpg",
        rating: 4.5,
        content: `The interview process at Google was both challenging and enlightening. Here's a breakdown of my experience:

1. Phone Screen:
   - 45-minute technical interview
   - Focused on data structures and algorithms
   - Implemented a solution for finding the k-th largest element in an unsorted array

2. On-site Interviews (Virtual due to COVID-19):
   - Four 45-minute interviews with different engineers
   - Topics covered:
     a) Algorithm design and optimization
     b) System design: Designed a simplified version of Google Drive
     c) Coding: Implemented a LRU cache
     d) Behavioral questions and past projects discussion

3. Tips for Future Candidates:
   - Brush up on your CS fundamentals, especially data structures and algorithms
   - Practice system design questions, focusing on scalability and trade-offs
   - Be prepared to discuss your past projects in depth
   - Don't hesitate to ask clarifying questions during the interviews

Overall, the interviewers were friendly and helpful. They were more interested in my problem-solving approach rather than just getting the right answer. It was a great learning experience!`,
        tags: ["Algorithms", "System Design", "Behavioral"],
        likes: 42,
        comments: 7,
    },
    // ... other experiences
]

// =============== Main Component ===============
export default function ExperienceDetails() {
    // If using React Router:
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    // Find experience by ID
    const experience = experiences.find((exp) => exp.id === Number(id))

    // Handle missing experience
    if (!experience) {
        return <div className="p-6 text-center">Experience not found</div>
    }

    return (
        <DashboardLayout>
            <div className="max-w-3xl mx-auto p-4">
                {/* Back Button */}
                <Button
                    variant="ghost"
                    onClick={() => navigate(-1)}
                    className="mb-4 flex items-center space-x-2"
                >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Experiences</span>
                </Button>

                {/* Main Card */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-3xl font-bold">{experience.company}</h1>
                        <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                            <Star className="h-5 w-5 text-yellow-500 fill-current" />
                            <span className="ml-1 text-lg font-bold text-yellow-700">{experience.rating}</span>
                        </div>
                    </div>

                    {/* Role */}
                    <div className="flex items-center text-gray-600 mb-4">
                        <Briefcase className="mr-2 h-5 w-5" />
                        <span className="text-lg">{experience.role}</span>
                    </div>

                    {/* Author & Date */}
                    <div className="flex items-center mb-6">
                        <Avatar
                            src={experience.authorAvatar}
                            alt={experience.author}
                            fallback={experience.author[0]}
                            className="h-10 w-10 mr-3"
                        />
                        <div>
                            <p className="font-semibold">{experience.author}</p>
                            <div className="flex items-center text-gray-500 text-sm">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>{experience.date}</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 mb-6">
                        {experience.content
                            .split("\n\n") // Splits by double line break
                            .map((paragraph, index) => (
                                <p key={index} className="text-gray-800">
                                    {paragraph}
                                </p>
                            ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {experience.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    {/* Separator */}
                    <Separator className="my-6" />

                    {/* Footer Actions */}
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                            <Button variant="ghost">
                                <ThumbsUp className="mr-2 h-4 w-4" />
                                Like ({experience.likes})
                            </Button>
                            <Button variant="ghost">
                                <MessageSquare className="mr-2 h-4 w-4" />
                                Comment ({experience.comments})
                            </Button>
                        </div>
                        <Button variant="ghost">
                            <Share2 className="mr-2 h-4 w-4" />
                            Share
                        </Button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
