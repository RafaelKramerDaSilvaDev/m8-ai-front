import axios from 'axios'

export class ChatService {
  public async sendMessage(message: string): Promise<string> {
    const response = await axios<{ answer: string }>({
      method: 'post',
      url: 'https://apipdi-production.up.railway.app/ask',
      data: {
        question: message,
      },
    })

    return response.data.answer
  }
}
