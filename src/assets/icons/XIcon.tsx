import { SVGProps } from 'react'

export default function X(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="#F2F2F2"
        d="M18.085 16.802a.909.909 0 1 1-1.285 1.285L12 13.286l-4.802 4.8A.909.909 0 0 1 5.913 16.8l4.802-4.8-4.8-4.801A.909.909 0 1 1 7.2 5.914l4.8 4.801L16.8 5.913a.909.909 0 0 1 1.286 1.285L13.285 12l4.8 4.802Z"
      />
    </svg>
  )
}
