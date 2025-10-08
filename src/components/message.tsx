type MessageProps = {
  message: string
}

export const Message = ({ message }: MessageProps) => {
  return (
    <div className="relative w-full max-w-xl bg-white px-4 py-3">
      <span className="text-md break-words text-gray-500">{message}</span>

      <div className="absolute bottom-0 left-0 flex h-1 w-full">
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
