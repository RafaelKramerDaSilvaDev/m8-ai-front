import Markdown from 'react-markdown'
import { cn } from '../utils/cn'

type MessageProps = {
  message: string
  direction: 'right' | 'left'
}

export const Message = ({ message, direction }: MessageProps) => {
  return (
    <div
      className={cn(
        'text-md w-full leading-relaxed whitespace-pre-wrap text-gray-700',
        direction === 'right' ? 'pl-16' : 'pr-16'
      )}
    >
      <div className="w-full rounded-lg bg-white px-4 py-3 shadow">
        <Markdown>{message}</Markdown>
      </div>
    </div>
  )
}
