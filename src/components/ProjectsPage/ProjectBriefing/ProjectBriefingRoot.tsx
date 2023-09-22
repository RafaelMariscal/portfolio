import Highlight from '@/components/Basic/Highlight'
import SectionTitle from '@/components/Basic/SectionTitle'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ProjectBriefingRootProps = ComponentProps<'section'>

export default function ProjectBriefingRoot({
  className,
  children,
  ...props
}: ProjectBriefingRootProps) {
  return (
    <section
      {...props}
      className={twMerge(
        'w-full max-w-4xl border border-cyan-700 bg-cyan-800/70 px-6 py-4 ',
        'shadow-md shadow-dark/40 backdrop-blur-sm',
        'max-md:max-w-lg',
        'max-tablets-xs:max-w-none max-tablets-xs:border-0 max-tablets-xs:px-3 max-tablets-xs:shadow-none',
        className,
      )}
    >
      <SectionTitle className="max-phones:leading-none">
        Project
        <Highlight className="block phones:ml-1 phones:inline">
          Briefing
        </Highlight>
      </SectionTitle>
      <div
        className="
          mt-6 flex gap-1
        "
      >
        <div
          className="
            flex h-3 w-full max-w-[8.5rem] items-end
            max-tablets-sm:max-w-[6rem]
            max-md:hidden
          "
        >
          <hr className="h-[.125rem] w-14 bg-gray-100" />
        </div>
        {children}
      </div>
    </section>
  )
}
