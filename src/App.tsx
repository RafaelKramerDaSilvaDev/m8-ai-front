import { useMutation } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import LogoM8 from './assets/logo_m8.svg'
import { InputMessage } from './components/input-message'
import { Message } from './components/message'
import { ChatService } from './services/chat-service'
import { cn } from './utils/cn'

export const App = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<string[]>([])
  const [value, setValue] = useState('')

  const chatService = new ChatService()

  const sendMessageMutation = useMutation({
    mutationFn: (message: string) => chatService.sendMessage(message),
    onSuccess: (answerMessage) =>
      setMessages((prevMessages) => [...prevMessages, answerMessage]),
  })

  const handleSendMessage = (newMessage: string) => {
    if (!newMessage.trim()) return

    setMessages((prevMessages) => [...prevMessages, newMessage])

    setValue('')

    sendMessageMutation.mutate(newMessage)
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages])

  const hasMessages = messages.length > 0

  return (
    <main className="flex h-screen flex-col bg-gray-200">
      <div className="flex items-center justify-center py-6">
        <img
          src={LogoM8}
          alt="Logo M8"
          className={cn('transition-all duration-300', {
            'w-32': !hasMessages,
            'w-20': hasMessages,
          })}
        />
      </div>

      <div
        ref={containerRef}
        className="flex w-full min-w-0 flex-1 flex-col gap-3 overflow-y-auto px-4 pb-4"
      >
        {messages.map((message, index) => (
          <Message
            key={`${index}-${message.slice(0, 10)}`}
            message={message}
            direction={index % 2 === 0 ? 'right' : 'left'}
          />
        ))}

        {sendMessageMutation.isPending && (
          <Message direction="left" message="Pensando..." />
        )}
      </div>

      <div className="sticky bottom-0 flex w-full flex-col gap-2 border-t border-gray-300 bg-gray-200 p-4">
        <InputMessage
          onChangeValue={setValue}
          value={value}
          onSend={() => handleSendMessage(value)}
        />
        <p className="text-center text-xs text-gray-500">
          O M8 AI pode cometer erros. Por isso, lembre-se de conferir
          informações relevantes.
        </p>
      </div>
    </main>
  )
}
