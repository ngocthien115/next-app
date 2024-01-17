'use client'
import { upload } from '@/server-actions'

import React from 'react'

export default function Input() {
  const [file, setFile] = React.useState<FileList>({} as FileList)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    console.log(files);
    setFile(files)
  }

  const send = async () => {
    const formData = new FormData()
    formData.append('file', file[0])

    const res = await upload(formData)
    console.log(res);

  }

  return (
    <div >
      <input type='file' className='border' onChange={onChange} multiple></input>
      <button className='p-3 border rounded' onClick={send}>Send</button>
    </div>
  )
}