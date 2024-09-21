import { ragChat } from '@/lib/rag-chat'
import { redis } from '@/lib/redis'
import { cookies } from 'next/headers'
import ChatWrapper from '../components/ChatWrapper'

interface PageProps {
  params: {
    url: string | string[] | undefined
  }
}

// Function to reconstruct the URL from the params
function reconstructUrl({ url }: { url: string[] }) {
  const decodedComponents = url.map((component) => {
    return decodeURIComponent(component)
  })
  return decodedComponents.join('/')
}

const page = async ({ params }: PageProps) => {
  // Get the sessionId from the session cookie
  const sessionCookie = cookies().get('sessionId')?.value

  // Reconstruct the URL from the params
  const reconstructedUrl = reconstructUrl({ url: params.url as string[] })

  // Generate a unique sessionId for the chat
  const sessionId = (reconstructedUrl + '--' + sessionCookie).replace(/\//g, '')

  // Check if the URL is already indexed in Redis
  const isAlreadyIndexed = await redis.sismember(
    'indexed-urls',
    reconstructedUrl
  )

  // Fetch the initial messages for the chat
  const initialMessages = await ragChat.history.getMessages({
    amount: 10,
    sessionId,
  })

  // If the URL is not indexed, add it to RagChat and Redis
  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: 'html',
      source: reconstructedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    })
    await redis.sadd('indexed-urls', reconstructedUrl)
  }

  // Render the ChatWrapper component with the sessionId and initial messages
  return <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
}

export default page
