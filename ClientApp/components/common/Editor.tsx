// components/MyEditor.tsx

import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import React from "react"
import dynamic from "next/dynamic"
import { stripHtml } from "@utils/helper"

interface MyEditorProps {
   data: string
   setData: (data: string) => void
}

// Import CKEditor dynamically and disable server-side rendering for it
const CKEditor = dynamic(
   () => import("@ckeditor/ckeditor5-react").then((module) => module.CKEditor),
   { ssr: false }
)

const Editor: React.FC<MyEditorProps> = ({ data, setData }) => {
   return (
      <CKEditor
         editor={ClassicEditor}
         config={{
            placeholder: "Write a caption...",
            toolbar: [],
         }}
         data={data}
         onReady={(editor) => {}}
         onChange={(event, editor) => {
            const data = (editor as any).getData()
            if (stripHtml(data).length <= 2201) {
               setData(data)
            }
         }}
         onBlur={(event, editor) => {}}
         onFocus={(event, editor) => {}}
      />
   )
}

export default Editor
