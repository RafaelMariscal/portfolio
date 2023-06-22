import { SVGProps } from 'react'

export default function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#F2F2F2"
          fillRule="evenodd"
          d="M1.767.048C.79.048 0 .815 0 1.76v20.48c0 .945.791 1.712 1.767 1.712h20.37c.976 0 1.767-.767 1.767-1.712V1.76c0-.945-.79-1.712-1.767-1.712H1.767ZM7.264 9.29v10.761H3.687V9.291h3.577ZM7.5 5.962c0 1.033-.776 1.86-2.024 1.86h-.023c-1.2 0-1.977-.827-1.977-1.86 0-1.056.8-1.86 2.024-1.86s1.977.804 2 1.86Zm5.32 14.09H9.245s.047-9.751 0-10.761h3.577v1.523c.476-.733 1.327-1.776 3.224-1.776 2.353 0 4.118 1.538 4.118 4.844v6.17h-3.577v-5.756c0-1.447-.518-2.434-1.812-2.434-.988 0-1.577.666-1.835 1.309-.095.229-.118.55-.118.872v6.01Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h23.904v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
