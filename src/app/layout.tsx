import { ReactNode } from 'react'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'RM Software Development',
  description:
    'Rafael Mariscal - Software Engineer expirienced with Frontend and Backend develpment, using Typescript, React, Nextjs, Nodejs and Nestjs.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`
          flex min-h-screen flex-col items-center justify-between
          bg-cyan-800 text-gray-100 
          ${montserrat.className} 
        `}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
