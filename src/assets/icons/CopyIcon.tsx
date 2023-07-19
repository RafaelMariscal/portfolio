import { SVGProps } from 'react'

export default function CopyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <path
        fill="#1C5052"
        fillRule="evenodd"
        d="M24.703.011h-12.2v4.422l6.932 6.753h8.296v1.35h-6.91l.135.131v2.745h4.073v1.35h-4.073v2.876h6.774v1.35h-6.774V26.5H32V7.308L24.703.011Zm5.576 7.624h-5.881V1.754l5.881 5.881Z"
        clipRule="evenodd"
      />
      <path
        fill="#213635"
        fillRule="evenodd"
        d="M11.98 5.675H0v26.314h19.278V12.972l-7.297-7.297Zm5.795 7.537h-5.881V7.33l5.881 5.882Zm-2.505 3.55H4.074v1.351H15.27v-1.35ZM4.074 20.99h8.408v1.35H4.074v-1.35Zm11.196 4.226H4.074v1.35H15.27v-1.35Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
