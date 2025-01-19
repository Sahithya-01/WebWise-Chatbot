Sure! Here's the content in `.md` format:

````md
# Web Wise

## Overview

Web Wise is a chat application built with **Next.js** that integrates **AI** for dynamic conversation, making it capable of interacting based on the content of any URL. The application provides a chat interface tied to a specific URL, where each chat session is uniquely identified and personalized. It uses Redis to manage session data and indexed URLs, while **RagChat** (AI integration) provides the chat responses.

### Key Features:

- **Dynamic Chat Interface**: Chat sessions are tied to a unique URL. Each URL can have a personalized conversation, allowing for interactive discussions based on the URL content.
- **AI Integration**: Uses a powerful AI model (Meta-Llama) to generate human-like responses in the chat.
- **Redis for Session and URL Management**: Redis handles the storage of chat histories and ensures URLs are only indexed once, improving efficiency.
- **Real-Time Streaming**: Supports real-time streaming of chat responses to enhance user interaction.

## Flow of the Application

Here is the step-by-step breakdown of how the app works:

1. **User Accesses a URL (e.g., `http://localhost:3000/https:/en.wikipedia.org/wiki/Umbrella`)**

   - The user accesses a dynamic URL with the format `http://localhost:3000/<your-topic-url>`.
   - The `<your-topic-url>` could be any valid URL (in this case, a Wikipedia URL). This is used to uniquely identify the chat session.

2. **URL Reconstruction**

   - When the user visits a URL, the system decodes and reconstructs the URL from the path parameters. This ensures that any URL encoded components (such as spaces or special characters) are properly handled.
   - Example: A user navigates to `http://localhost:3000/https:/en.wikipedia.org/wiki/Umbrella`, which is reconstructed into `https:/en.wikipedia.org/wiki/Umbrella`.

   - This is handled by the function `reconstructUrl()` in `page.tsx`.

3. **Session Management**

   - The system checks if the user has a session ID (via a cookie). If not, it generates a new session ID using a random UUID.
   - The session ID is generated using `crypto.randomUUID()` and stored in a cookie for future requests. This ensures that each user session is tracked independently.

4. **URL Indexing**

   - When the user accesses a URL, the app checks if this URL has been indexed in **Redis**.
     - If the URL has already been indexed, it skips re-indexing it and proceeds with the existing chat history.
     - If the URL is not indexed, it adds the URL to both the **RagChat AI model** (for content-based response generation) and **Redis** (to track the indexed URL).
   - This URL indexing process is managed by the `redis.sismember()` and `redis.sadd()` functions in `page.tsx`.

5. **Fetching Chat History**

   - The system retrieves the chat history associated with the session (if any). This ensures that if the user has interacted with the system previously, they can continue from where they left off.
   - Chat history is fetched by calling `ragChat.history.getMessages()`.

6. **Rendering the Chat UI**

   - Once the URL is indexed and chat history (if any) is fetched, the application renders the chat interface. The user can start sending messages, and the AI will respond based on the content of the URL and the chat context.
   - This is done in the `ChatWrapper.tsx` component, which is responsible for rendering the chat UI, displaying messages, and handling user input.

7. **AI Chat Responses**
   - Each time a user sends a message, it’s passed to the AI model (Meta-Llama) to generate a response.
   - The message and session information are sent to the AI backend (via the `POST /api/chat-stream` endpoint), which processes the message and streams the response back.
   - This real-time message handling is done in the `api/chat-stream/route.ts` file.

---

## Files and Their Role in the Flow:

1. **`page.tsx`** (Dynamic Chat Page)

   - Handles the URL reconstruction and session management.
   - Manages the process of checking if the URL is indexed in Redis and fetching the chat history.

2. **`api/chat-stream/route.ts`** (API Route for Handling Messages)

   - Handles incoming POST requests with chat messages.
   - Sends the messages to the AI backend (RagChat) for processing and returns the generated response.

3. **`lib/redis.ts`** (Redis Connection)

   - Configures and exports the Redis connection, which is used to store and retrieve indexed URLs and chat session data.

4. **`lib/rag-chat.ts`** (AI Integration with RagChat)

   - Configures the **RagChat** instance, which communicates with the AI model to generate chat responses.

5. **`middleware.ts`** (Session Middleware)
   - Ensures each user has a unique session ID by setting a new session ID cookie if one is not already present.

---

## Getting Started

### Prerequisites:

Make sure you have the following tools installed:

- **Node.js** (for running the app)
- **npm** or **yarn** (for managing packages)

### Installation:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
````

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root of the project and add the following variables:
   ```bash
   REDIS_URL=your-redis-url
   ```

### Running the Application:

1. **Start the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Access the app**:
   Open your browser and go to `http://localhost:3000`.

### Chat Usage:

To start a conversation, navigate to a URL in the following format:

- **Example URL**: `http://localhost:3000/https:/en.wikipedia.org/wiki/Umbrella`

This will create a unique chat session based on the URL content (in this case, the Wikipedia page about "Umbrella").

### API Routes:

- **POST /api/chat-stream**: This endpoint handles incoming chat messages and communicates with the AI backend to generate responses. The response is then sent back to the frontend to be displayed in the chat UI.

### Components:

- **ChatInput.tsx**: Allows users to input text and send messages to the chat.
- **ChatWrapper.tsx**: Manages the chat interface, including rendering messages and handling user input.
- **Messages.tsx**: Displays a list of messages within the chat.
- **Message.tsx**: Displays an individual message in the chat UI.

### Libraries Used:

- **Next.js**: The framework used to build the app, providing server-side rendering and routing.
- **Redis**: Used to store session and URL data for fast lookups and indexing.
- **RagChat**: Provides AI chat capabilities for generating real-time responses based on the URL content.

```

```
