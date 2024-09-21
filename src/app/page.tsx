import Image from "next/image";

export default function Home() {
return (
  <div className="container mx-auto p-4">
    <header className="text-center">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to the Chat Application
      </h1>
    </header>
    <main className="text-center">
      <p className="mb-4">
        To use the chat feature, you need to navigate to a specific URL.
      </p>
      <p className="mb-4">
        For example:{' '}
        <code className="bg-gray-200 p-2 rounded text-black">
          http://localhost:3000/[your-topic-url]
        </code>
      </p>
      <p className="mb-4 ">
        Make sure to replace <code>your-topic-url</code> with the desired chat topic
        or identifier.
      </p>
      <p className="mb-4">
        If you just visit the root URL, you won’t see the chat interface.
      </p>
      <p className="mb-4">
        After that you can ask any questions regarding your topic
      </p>
      {/* <Link href="/chat">
      <a className="text-blue-500 underline">Go to Chat Example</a>
    </Link> */}
    </main>
  </div>
)
}
