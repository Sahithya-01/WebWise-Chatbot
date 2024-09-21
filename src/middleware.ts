// Import the NextResponse and NextRequest types from the 'next/server' package
import { NextResponse, NextRequest } from 'next/server'

// Export a function called 'middleware' that accepts a NextRequest object as a parameter
export function middleware(req: NextRequest) {
  // Create a new NextResponse object using NextResponse.next()
  const res = NextResponse.next()

  // Get the value of the "sessionId" cookie from the request
  const cookie = req.cookies.get('sessionId')

  // If the "sessionId" cookie is not present, set a new "sessionId" cookie with a random UUID value
  if (!cookie) {
    res.cookies.set('sessionId', crypto.randomUUID())
  }

  // Return the modified NextResponse object
  return res
}
