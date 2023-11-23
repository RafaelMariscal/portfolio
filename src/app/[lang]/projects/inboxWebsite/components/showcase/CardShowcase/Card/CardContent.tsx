import { ReactNode } from 'react'

interface CardContentProps {
  children: ReactNode
}

export default function CardContent({ children }: CardContentProps) {
  return (
    <div className="absolute inset-0 bg-[#062e24]/60 text-light transition-colors">
      {children}
    </div>
  )
}
