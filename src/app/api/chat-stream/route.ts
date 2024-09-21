import { ragChat } from '@/lib/rag-chat'
import { aiUseChatAdapter } from '@upstash/rag-chat/nextjs'
import { NextRequest } from 'next/server'

// POST endpoint for handling chat messages
export const POST = async (req: NextRequest) => {
  // Parse the request body as JSON
  const { messages, sessionId } = await req.json()

  // Get the content of the last message
  const lastMessage = messages[messages.length - 1].content

  // Send the last message to RagChat and enable streaming
  const response = await ragChat.chat(lastMessage, {
    streaming: true,
    sessionId,
  })

  // Log the response for debugging purposes
  console.log('response: ', response)

  // Return the response in a format compatible with aiUseChatAdapter
  return aiUseChatAdapter(response)
}
