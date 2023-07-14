import { twMerge } from 'tailwind-merge'

interface ProjectTitleProps {
  title: string
  className?: string
}
export default function ProjectTitle({ title, className }: ProjectTitleProps) {
  return (
    <h2
      className={twMerge(
        'w-fit text-2xl font-bold leading-none tracking-wider ',
        'underline underline-offset-4 drop-shadow-custom-text',
        className,
      )}
    >
      {title}
    </h2>
  )
}
