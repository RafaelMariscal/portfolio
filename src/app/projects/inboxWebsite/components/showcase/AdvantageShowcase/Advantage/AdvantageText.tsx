import { ReactNode } from 'react'

interface AdvantageTextProps {
  children?: ReactNode
}

export default function AdvantageText({ children }: AdvantageTextProps) {
  return (
    <p
      className="
        max-phones-sm:text-sm max-phones-sm:font-semibold font-medium leading-tight
        text-[#0f5e46] drop-shadow-custom-text
      "
    >
      {children}
    </p>
  )
}
