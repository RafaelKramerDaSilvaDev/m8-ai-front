import { Send } from 'lucide-react'
import TextareaAutosize from 'react-textarea-autosize'

type InputMessageProps = {
  onChangeValue: (value: string) => void
  value: string
  onSend: () => void
}

export const InputMessage = ({
  onChangeValue,
  value,
  onSend,
}: InputMessageProps) => {
  return (
    <div className="relative w-full max-w-xl">
      <TextareaAutosize
        className="text-md w-full resize-none bg-white px-4 py-3 pr-10 text-gray-500 placeholder-gray-400 shadow outline-none"
        placeholder="Pergunte alguma coisa"
        onChange={(event) => onChangeValue(event.target.value)}
        value={value}
      />

      <button
        type="button"
        className="absolute top-[26px] right-4 -translate-y-1/2 transform cursor-pointer hover:scale-105"
      >
        <Send className="h-5 w-5 text-gray-400" onClick={onSend} />
      </button>

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
