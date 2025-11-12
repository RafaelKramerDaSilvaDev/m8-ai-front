import { useMutation } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import LogoWithName from './assets/logo-with-name.svg'
import { InputMessage } from './components/input-message'
import { Message } from './components/message'
import { useMessage } from './hooks/useMessage'
import { ChatService } from './services/chat-service'
import { cn } from './utils/cn'

export const Page = () => {
  const messageHook = useMessage()

  const containerRef = useRef<HTMLDivElement>(null)

  const [value, setValue] = useState('')

  const chatService = new ChatService()

  const sendMessageMutation = useMutation({
    mutationFn: (message: string) => chatService.sendMessage(message),
    onSuccess: (answerMessage) => {
      messageHook.create({
        from: 'm8-ai',
        to: 'user',
        text: answerMessage.trim(),
      })
    },
  })

  const handleSendMessage = (newMessage: string) => {
    if (!newMessage.trim()) return

    messageHook.create({
      from: 'user',
      to: 'm8-ai',
      text: newMessage.trim(),
    })

    setValue('')

    sendMessageMutation.mutate(newMessage)
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messageHook.messages])

  const hasMessages = messageHook.messages.length > 0

  return (
    <main className="flex h-screen flex-col bg-gray-200">
      <div className="flex items-center justify-center py-6">
        <img
          src={LogoWithName}
          alt="Logo M8"
          className={cn('transition-all duration-300', {
            'w-48': !hasMessages,
            'w-32': hasMessages,
          })}
        />
      </div>

      <div
        ref={containerRef}
        className="flex w-full min-w-0 flex-1 flex-col gap-3 overflow-y-auto px-4 pb-4"
      >
        {messageHook.messages.map((message) => (
          <Message
            message={message.text}
            direction={message.from === 'm8-ai' ? 'left' : 'right'}
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
          onSubmit={() => handleSendMessage(value)}
        />
        <p className="text-center text-xs text-gray-500">
          O Harpia by M8 pode cometer erros. Por isso, lembre-se de conferir
          informações relevantes.
        </p>
      </div>
    </main>
  )
}
