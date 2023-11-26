// components/MyEditor.tsx

import React, { useEffect, useState } from "react"

import { CKEditor as CKEditorComponent } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import dynamic from "next/dynamic"
import { stripHtml } from "@utils/helper"

interface MyEditorProps {
   data: string
   setData: (data: string) => void
}

const Editor: React.FC<MyEditorProps> = ({ data, setData }) => {
   return (
      <CKEditorComponent
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
