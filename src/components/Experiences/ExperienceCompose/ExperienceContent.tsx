interface ExperienceContentProps {
  text: string
}

export default function ExperienceContent({ text }: ExperienceContentProps) {
  return (
    <h3 className="text-lg font-semibold text-light drop-shadow-custom-text">
      {text}
    </h3>
  )
}
