import { SVGProps } from 'react'

export default function FilePdf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={25}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#F2F2F2"
          fillRule="evenodd"
          d="M20.503 3.593A11.873 11.873 0 0 0 12.05.09C5.464.09.104 5.448.101 12.034c0 2.105.55 4.16 1.595 5.972l-1.695 6.19 6.334-1.661a11.944 11.944 0 0 0 5.71 1.454h.005c6.586 0 11.946-5.36 11.949-11.945a11.87 11.87 0 0 0-3.496-8.451ZM12.05 21.971h-.004c-1.782 0-3.53-.48-5.055-1.384l-.362-.215-3.76.986 1.004-3.664-.236-.375a9.903 9.903 0 0 1-1.518-5.284c.002-5.474 4.457-9.928 9.935-9.928a9.866 9.866 0 0 1 7.022 2.912 9.867 9.867 0 0 1 2.906 7.024c-.003 5.474-4.458 9.928-9.932 9.928Zm5.448-7.435c-.299-.15-1.767-.872-2.04-.972-.274-.1-.473-.149-.672.15-.2.299-.771.97-.945 1.17-.175.2-.349.224-.647.075-.299-.15-1.26-.465-2.401-1.482-.888-.79-1.487-1.768-1.661-2.067-.174-.299-.019-.46.13-.61.135-.133.3-.348.449-.522.149-.175.199-.299.298-.498.1-.2.05-.374-.025-.523-.074-.15-.671-1.619-.92-2.216-.243-.582-.489-.503-.672-.513-.174-.008-.373-.01-.572-.01-.2 0-.523.075-.796.373-.274.3-1.045 1.021-1.045 2.49 0 1.47 1.07 2.889 1.219 3.088.15.2 2.105 3.214 5.1 4.507.712.307 1.268.49 1.702.628.715.227 1.366.195 1.88.119.574-.086 1.767-.722 2.016-1.42.249-.697.249-1.294.174-1.419-.075-.124-.274-.2-.572-.348Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .09h24v24.106H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
