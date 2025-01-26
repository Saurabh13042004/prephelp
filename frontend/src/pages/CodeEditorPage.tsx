
import React, { useState } from "react"
import { Play, Save } from "lucide-react"
import DashboardLayout from "../components/DashboardLayout" // Remove or adjust based on your project
import { CodeEditor } from "../components/CodeEditor"

const initialCode = `function greet(name) {
  return \`Hello, \${name}!\`;
}

// Example usage:
// greet("Student");
`

export default function CodeEditorPage() {
  const [code, setCode] = useState(initialCode)
  const [language, setLanguage] = useState("javascript")

  // For demonstration, let's store test input and a console output
  const [testInput, setTestInput] = useState("World")
  const [output, setOutput] = useState("")

  // "Run" the code in the browser environment
  const handleRunCode = () => {
    setOutput("") // clear previous output
    try {
      // We'll wrap user code + a "return" statement in a new function
      // We pass `testInput` so the user can use `greet(testInput)` in their code
      const result = new Function("testInput", `${code}\nreturn greet(testInput);`)(
        testInput
      )
      setOutput(String(result))
    } catch (error: any) {
      setOutput(`Error: ${error.message}`)
    }
  }

  // Simulate saving the code (e.g., to a database)
  const handleSaveCode = () => {
    console.log("Saving code:", code)
    alert("Code saved successfully!")
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto w-full border rounded-md shadow p-4 space-y-4">
        {/* Header */}
        <h2 className="text-2xl font-semibold">Code Editor</h2>

        {/* Language Selector */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Select Language
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
        </div>

        {/* Code Editor */}
        <div>
          <CodeEditor
            initialCode={code}
            language={language}
            onChange={(updatedCode) => setCode(updatedCode)}
          />
        </div>

        {/* Test Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Test Case Input
          </label>
          <input
            type="text"
            value={testInput}
            onChange={(e) => setTestInput(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder='Example: "World"'
          />
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleRunCode}
            className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Play className="mr-2 h-4 w-4" />
            Run Code
          </button>
          <button
            onClick={handleSaveCode}
            className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-700"
          >
            <Save className="mr-2 h-4 w-4" />
            Save
          </button>
        </div>

        {/* Console Output */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Console Output
          </label>
          <textarea
            readOnly
            className="border border-gray-300 rounded p-2 w-full h-24"
            value={output}
          />
        </div>
      </div>
    </DashboardLayout>
  )
}
