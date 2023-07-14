import { twMerge } from 'tailwind-merge'

interface BootcampProjectContentTitleProps {
  title: string
  className?: string
}
export default function BootcampProjectContentTitle({
  title,
  className,
}: BootcampProjectContentTitleProps) {
  return (
    <h3
      className={twMerge(
        'text-start text-2xl font-bold uppercase text-cyan-600 drop-shadow-custom-text',
        className,
      )}
    >
      {title}
    </h3>
  )
}
