import { cn } from '../utils/cn'

type MessageProps = {
  message: string
  direction: 'right' | 'left'
}

export const Message = ({ message, direction }: MessageProps) => {
  return (
    <div className={cn('w-full', direction === 'right' ? 'pl-16' : 'pr-16')}>
      <div
        className={cn(
          'relative flex max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]',
          'rounded-lg bg-white px-4 py-3 shadow'
        )}
      >
        <span className="text-md leading-relaxed whitespace-pre-wrap text-gray-700">
          {message}
        </span>
      </div>
    </div>
  )
}
