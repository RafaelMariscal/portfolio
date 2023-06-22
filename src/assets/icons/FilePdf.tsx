import { SVGProps } from 'react'

export default function FilePdf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={23}
      height={24}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#F2F2F2"
          d="M23 16a1 1 0 0 1-1 1h-3v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1ZM6.5 18.5A3.5 3.5 0 0 1 3 22H2v1a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1h2a3.5 3.5 0 0 1 3.5 3.5Zm-2 0A1.5 1.5 0 0 0 3 17H2v3h1a1.5 1.5 0 0 0 1.5-1.5Zm11 1A4.5 4.5 0 0 1 11 24H9a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a4.5 4.5 0 0 1 4.5 4.5Zm-2 0A2.5 2.5 0 0 0 11 17h-1v5h1a2.5 2.5 0 0 0 2.5-2.5ZM0 11V2a2 2 0 0 1 2-2h12a1 1 0 0 1 .707.292l7 7A1 1 0 0 1 22 8v3a1 1 0 0 1-2 0V9h-6a1 1 0 0 1-1-1V2H2v9a1 1 0 1 1-2 0Zm15-4h3.586L15 3.414V7Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h23v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
