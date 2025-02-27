import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Briefcase,
  Star,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import DashboardLayout from "../components/DashboardLayout"
import {  useNavigate } from "react-router-dom"

interface FormData {
  company: string
  role: string
  date: string
  process: string
  rating: number
  tags: string[]
}

const steps = [
  { title: "Company Details", icon: Briefcase },
  { title: "Interview Process", icon: Calendar },
  { title: "Rating & Tags", icon: Star },
  { title: "Review & Submit", icon: ChevronRight },
]

export default function ShareExperience() {
  // Track current step and form data
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    company: "",
    role: "",
    date: "",
    process: "",
    rating: 3,
    tags: [],
  })

  // Handle input and textarea changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle slider change (rating)
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRating = parseFloat(e.target.value)
    setFormData((prev) => ({ ...prev, rating: newRating }))
  }

  // Toggle selected tags
  const handleTagToggle = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }))
  }

  // Proceed to next or previous step
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      handleSubmit()
    }
  }
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  // Validate current step before enabling "Next"
  const isStepComplete = () => {
    switch (currentStep) {
      case 0:
        return formData.company && formData.role && formData.date
      case 1:
        return formData.process.length >= 50
      case 2:
        return formData.tags.length > 0
      default:
        return true
    }
  }

  // Submit handler (replace with your own backend call / API logic)
  const handleSubmit = () => {
    console.log("Submitting:", formData)
    alert("Experience Shared! Thank you for submitting.")
    // Example navigation - replace with your own router logic or React Router
    navigate('/student/dashboard')
    console.log("Navigate to /experiences")
  }

  // Render each step’s content
  const renderStep = () => {
    switch (currentStep) {
      case 0: // Company Details
        return (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Enter company name"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <input
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                placeholder="Enter job role"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Interview Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
          </div>
        )

      case 1: // Interview Process
        return (
          <div className="space-y-4">
            <label
              htmlFor="process"
              className="block text-sm font-medium text-gray-700"
            >
              Describe the interview process
            </label>
            <textarea
              id="process"
              name="process"
              value={formData.process}
              onChange={handleInputChange}
              placeholder="Share details about the interview stages, questions asked, and your overall experience"
              rows={10}
              maxLength={500}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            />
            <p className="text-sm text-gray-500">
              {formData.process.length}/500 characters (minimum 50)
            </p>
          </div>
        )

      case 2: // Rating & Tags
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                How would you rate your interview experience?
              </label>
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="range"
                  min={0}
                  max={5}
                  step={0.5}
                  value={formData.rating}
                  onChange={handleSliderChange}
                  className="w-[60%]"
                />
                <span className="font-bold text-2xl">{formData.rating}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select tags that describe your interview
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Technical",
                  "Behavioral",
                  "System Design",
                  "Algorithms",
                  "Culture Fit",
                  "Coding",
                  "Whiteboard",
                ].map((tag) => {
                  const isSelected = formData.tags.includes(tag)
                  return (
                    <span
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`cursor-pointer inline-block rounded-full px-3 py-1 text-sm font-medium transition-colors ${isSelected
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        )

      case 3: // Review & Submit
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Review Your Experience</h3>
            <div className="space-y-1 text-gray-700">
              <p>
                <strong>Company:</strong> {formData.company}
              </p>
              <p>
                <strong>Role:</strong> {formData.role}
              </p>
              <p>
                <strong>Date:</strong> {formData.date}
              </p>
              <p>
                <strong>Rating:</strong> {formData.rating}/5
              </p>
              <p>
                <strong>Tags:</strong> {formData.tags.join(", ")}
              </p>
            </div>
            <div>
              <p>
                <strong>Interview Process:</strong>
              </p>
              <p className="whitespace-pre-wrap text-gray-700">
                {formData.process}
              </p>
            </div>
          </div>
        )
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Share Your Interview Experience</h1>

        {/* Stepper */}
        <div className="mb-8">
          {/* Icons + Titles */}
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${index <= currentStep
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-500"
                    }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="text-xs mt-2">{step.title}</span>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-2 h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-in-out"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Animated Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`inline-flex items-center px-4 py-2 rounded-md border 
          ${currentStep === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!isStepComplete()}
            className={`inline-flex items-center px-4 py-2 rounded-md 
          ${isStepComplete()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}
