import { Search } from 'lucide-react'
import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

export const InputMessage = () => {
  const [value, setValue] = useState('')

  return (
    <div className="relative w-full max-w-xl">
      <TextareaAutosize
        className="w-full resize-none bg-white px-4 py-3 pr-10 text-lg text-gray-500 placeholder-gray-400 shadow outline-none"
        placeholder="Pergunte alguma coisa"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />

      <div className="absolute top-1/2 right-4 -translate-y-1/2 transform">
        <Search className="h-5 w-5 text-gray-400" />
      </div>

      <div className="absolute bottom-1 left-0 flex h-1 w-full">
        <div className="w-1/6 bg-red-500"></div>
        <div className="w-1/6 bg-orange-500"></div>
        <div className="w-1/6 bg-yellow-400"></div>
        <div className="w-1/6 bg-blue-400"></div>
        <div className="w-1/6 bg-blue-600"></div>
        <div className="w-1/6 bg-green-500"></div>
      </div>
    </div>
  )
}
