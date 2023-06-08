import { SVGProps } from 'react'

export default function NavLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={61}
      height={32}
      fill="none"
      {...props}
    >
      <path
        fill="#F2F2F2"
        d="M13.178 4.743H5.363V32H0V0h14.359c5.175 0 10.668 4.048 10.588 9.67-.138 9.703-9.527 10.01-9.527 10.01L25.616 32H18.89l-8.594-11.918h-3.02v-4.694h6.18c3.639 0 6.29-1.994 6.29-5.718 0-1.94-1.937-4.927-6.57-4.927ZM26.53 9.143V32h5.6l.02-14.932 7.648 8.51 7.63-8.51L47.409 32h5.638V9.143h-5.628l-7.62 8.733-7.668-8.733h-5.6ZM55.96 27.429h4.571V32H55.96z"
      />
    </svg>
  )
}
