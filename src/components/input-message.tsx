import { SendHorizonal } from 'lucide-react'
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
      <div className="flex items-end rounded-t-sm bg-white shadow">
        <TextareaAutosize
          className="text-md flex-1 resize-none rounded-t-sm bg-white px-4 py-3 text-gray-700 placeholder-gray-400 outline-none"
          placeholder="Pergunte alguma coisa"
          onChange={(event) => onChangeValue(event.target.value)}
          value={value}
          minRows={1}
          maxRows={6}
        />

        <button
          type="button"
          onClick={onSend}
          className="p-3 text-gray-500 transition-transform hover:scale-105"
        >
          <SendHorizonal className="h-5 w-5" />
        </button>
      </div>

      <div className="bottom-1- absolute left-0 flex h-1 w-full overflow-hidden rounded-b-sm">
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
