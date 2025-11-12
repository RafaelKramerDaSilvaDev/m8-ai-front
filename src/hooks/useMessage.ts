import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { MessageType } from '../@types/message'

export const useMessage = () => {
  const [messages, setMessages] = useState<MessageType[]>([])

  const create = (params: Pick<MessageType, 'from' | 'to' | 'text'>) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
        from: params.from,
        to: params.to,
        read: false,
        text: params.text,
      },
    ])
  }

  const update = (params: Pick<MessageType, 'id' | 'text'>) => {
    setMessages((prevMessages) => {
      const indexToUpdate = prevMessages.findIndex(
        (message) => message.id === params.id
      )

      if (indexToUpdate === -1) return prevMessages

      const messageToUpdate = prevMessages[indexToUpdate]

      const updatedMessage = {
        ...messageToUpdate,
        id: params.id,
        updatedAt: new Date(),
        text: params.text,
      }

      const copy = [...prevMessages]

      copy[indexToUpdate] = updatedMessage

      return copy
    })
  }

  return {
    create,
    update,
    messages,
  }
}
