interface ToastMessageDescriptionProps {
  description: string
}

export default function ToastMessageDescription({
  description,
}: ToastMessageDescriptionProps) {
  return (
    <p className="text-sm font-semibold leading-none text-cyan-700 opacity-80">
      {description}
    </p>
  )
}
