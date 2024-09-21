// Import the RAGChat and upstash modules from the @upstash/rag-chat package
import { RAGChat, upstash } from '@upstash/rag-chat'
// Import the redis module from the ./redis file
import { redis } from './redis'

// Export a new instance of RAGChat, configured with the specified model and redis connection
export const ragChat = new RAGChat({
  model: upstash('meta-llama/Meta-Llama-3-8B-Instruct'), // Use the Meta-Llama-3-8B-Instruct model
  redis: redis, // Use the redis connection
})
