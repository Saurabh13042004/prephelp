import React, { useRef, useState, useEffect } from "react"
import * as monaco from "monaco-editor"
import { Loader2 } from "lucide-react"

interface CodeEditorProps {
  initialCode: string
  language: string
  onChange?: (value: string) => void
}

export function CodeEditor({ initialCode, language, onChange }: CodeEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Create the editor on mount
  useEffect(() => {
    if (!containerRef.current) return

    editorRef.current = monaco.editor.create(containerRef.current, {
      value: initialCode,
      language,
      theme: "vs-dark",
      automaticLayout: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      fontSize: 14,
      lineNumbers: "on",
      renderLineHighlight: "all",
      tabSize: 2,
    })

    // Listen for changes
    const model = editorRef.current.getModel()
    const subscription = model?.onDidChangeContent(() => {
      if (onChange) {
        onChange(model?.getValue() || "")
      }
    })

    setIsLoading(false)

    return () => {
      subscription?.dispose()
      editorRef.current?.dispose()
    }
    // We only want this to run once to create the editor.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // If the language changes, update the model language
  useEffect(() => {
    if (editorRef.current) {
      const model = editorRef.current.getModel()
      if (model) {
        monaco.editor.setModelLanguage(model, language)
      }
    }
  }, [language])

  // If `initialCode` changes externally, update the editor
  // but only if it's different from the current content
  useEffect(() => {
    const currentVal = editorRef.current?.getValue()
    if (currentVal !== initialCode && editorRef.current) {
      editorRef.current.setValue(initialCode)
    }
  }, [initialCode])

  return (
    <div className="relative h-[500px] w-full border border-gray-200 rounded-md overflow-hidden z-0">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
        </div>
      )}
      <div ref={containerRef} className="h-full w-full" />
    </div>
  )
}
