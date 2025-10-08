import { useState } from 'react'
import LogoM8 from './assets/logo_m8.svg'
import { InputMessage } from './components/input-message'
import { Message } from './components/message'

export const App = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [value, setValue] = useState('')

  const handleSendMessage = (newMessage: string) => {
    setMessages((prevMessages) => [...prevMessages, newMessage])
  }

  return (
    <main className="h-screen overflow-auto bg-gray-200">
      <div className="flex w-full flex-col items-center justify-center gap-8 pt-32">
        <img src={LogoM8} alt="Logo M8" className="w-32" />

        <div className="flex flex-col gap-2 p-4">
          <InputMessage
            onChangeValue={setValue}
            value={value}
            onSend={() => handleSendMessage(value)}
          />

          <p className="px-3 text-center text-xs text-gray-500">
            O M8 AI pode cometer erros. Por isso, lembre-se de conferir
            informações relevantes.
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-2 p-4">
          {messages.map((message) => (
            <Message key={message} message={message} />
          ))}
        </div>
      </div>
    </main>
  )
}
