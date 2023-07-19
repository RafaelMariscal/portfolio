interface ToastMessageTitleProps {
  title: string
}

export default function ToastMessageTitle({ title }: ToastMessageTitleProps) {
  return <p className="font-semibold text-cyan-700">{title}</p>
}
