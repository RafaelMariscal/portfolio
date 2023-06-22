import { ReactNode } from 'react'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'RM Software Development',
  description:
    'Rafael Mariscal - Software Engineer expirienced with Frontend and Backend develpment, using Typescript, React, Nextjs, Nodejs and Nestjs.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
