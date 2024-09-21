'use client'

import { Message, useChat } from 'ai/react'
import ChatInput from './ChatInput'
import Messages from './Messages'

// ChatWrapper component
const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string
  initialMessages: Message[]
}) => {
  // Use the useChat hook to manage the chat state
  const { messages, handleInputChange, handleSubmit, input, setInput } =
    useChat({
      api: '/api/chat-stream',
      body: { sessionId },
      initialMessages,
    })

  return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
        <Messages messages={messages} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          value={input}
          onChange={handleInputChange}
          type="text"
        />
        <button type="submit">send</button>
      </form>
      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setInput={setInput}
      />
    </div>
  )
}

export default ChatWrapper
