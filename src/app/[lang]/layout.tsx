import '../globals.css'
import { ReactNode } from 'react'
import { Montserrat } from 'next/font/google'
import { GlobalToastContextProvider } from '@/contexts/ToastContext/provider'
import { Locale, i18n } from '@/config/i18n.config'
import Footer from '@/components/Footer'
import Experiences from '@/components/Experiences'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'RM Software Development',
  description:
    'Rafael Mariscal - Software Engineer expirienced with Frontend and Backend develpment, using Typescript, React, Nextjs, Nodejs and Nestjs.',
}

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }))
  return languages
}

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body
        className={`
          flex min-h-screen flex-col items-center justify-between
          bg-cyan-800 text-gray-100 
          ${montserrat.className} 
        `}
      >
        <GlobalToastContextProvider>
          {children}
          <Experiences lang={params.lang} />
          <Footer />
        </GlobalToastContextProvider>
      </body>
    </html>
  )
}
