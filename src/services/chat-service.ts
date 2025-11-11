import axios from 'axios'

export class ChatService {
  public async sendMessage(message: string): Promise<string> {
    const response = await axios<{ answer: string }>({
      method: 'post',
      url: 'http://localhost:8000/ask',
      data: {
        question: message,
      },
    })

    return response.data.answer
  }
}
