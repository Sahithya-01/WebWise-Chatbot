// Import necessary types and functions from Next.js
import type { Metadata } from 'next'
import localFont from 'next/font/local'

// Import global CSS styles
import './globals.css'

// Import utility function for class names
import { cn } from '@/utils/utils'

// Import Inter font from Google Fonts
import { Inter } from 'next/font/google'

// Import Providers component
import Providers from './components/Providers'

// Load Inter font with latin subset
const inter = Inter({ subsets: ['latin'] })

// // Load local Geist Sans font
// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })

// // Load local Geist Mono font
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// })

// Define metadata for the application
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// Define the RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={cn(inter.className, 'min-h-screen antialiased')}
      >
      
        <Providers>
          <main className="h-screen dark text-foreground bg-background">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
