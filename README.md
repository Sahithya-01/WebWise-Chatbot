# Web Wise

## Overview

This project is a chat application built with Next.js. It uses a chat interface that dynamically handles messages and interacts with an AI backend. The application includes a chat UI, message handling, and integration with a Redis database.

## Features

- **Chat Interface**: A user-friendly chat interface where users can send and receive messages.
- **AI Integration**: Utilizes AI models to generate chat responses.
- **Dynamic URL Handling**: Chats are tied to specific URLs, enabling unique sessions based on the URL.
- **Redis Integration**: Manages indexed URLs and chat histories using Redis.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**:
   Create a `.env.local` file in the root of the project and add your environment variables. For example:
   ```
   REDIS_URL=your-redis-url
   ```

### Running the Application

1. **Start the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Access the application**:
   Open your browser and go to `http://localhost:3000`.

### Using the Chat Feature

To use the chat feature, navigate to a specific URL pattern:

- **Example URL**: `http://localhost:3000/chat/your-topic`
  - Replace `your-topic` with the desired chat topic or identifier.

### Instructions on Root Page

When you first run the application, you will land on the root page. Instructions are provided to guide you on how to access the chat feature:

- Navigate to a URL in the format `http://localhost:3000/chat/your-topic` to start a chat.
- Ensure to replace `your-topic` with the relevant chat identifier.
- If you just visit the root URL, you won’t see the chat interface.

### API Routes

- **POST /api/chat-stream**: Handles incoming chat messages and communicates with the AI backend.

### Components

- **ChatInput.tsx**: Provides a text area for user input and a send button.
- **ChatWrapper.tsx**: Manages the chat state and renders messages and input.
- **Messages.tsx**: Displays a list of chat messages.
- **Message.tsx**: Displays an individual chat message.

### Libraries Used

- **Next.js**: Framework for building the application.
- **Redis**: In-memory data structure store used for managing chat states and indexing URLs.
- **RagChat**: AI chat model integration.
