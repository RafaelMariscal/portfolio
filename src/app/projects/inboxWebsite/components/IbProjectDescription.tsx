import Description from '@/components/ProjectsPage/Description'

function IbProjectDescription() {
  return (
    <Description.Root>
      <Description.Paragraph className="max-w-screen-tablets-sm text-xl leading-tight">
        I&rsquo;m a <Description.Highlight>TI Analyst</Description.Highlight> at{' '}
        <Description.Highlight>Inbox Refeições Coletivas</Description.Highlight>{' '}
        , a catering company with focus on the Industrial sector - B2B. This
        company is based in Fortaleza-CE (Brazil), consequently, this project is
        presented in Portuguese-BR.
      </Description.Paragraph>
      <Description.Paragraph className="mt-4">
        In this project, I assumed a range of responsibilities, from design to
        development. The Design and prototype tasks was tackled using{' '}
        <Description.Highlight>Figma</Description.Highlight>, the Front End was
        made using <Description.Highlight>Typescript</Description.Highlight>,{' '}
        <Description.Highlight>NextJs</Description.Highlight>,{' '}
        <Description.Highlight>Tailwind</Description.Highlight>, and for
        accessibility and animations,{' '}
        <Description.Highlight>RadixUi</Description.Highlight>, and{' '}
        <Description.Highlight>Framer Motion</Description.Highlight>. The Back
        End was build using the NextJs server side with{' '}
        <Description.Highlight>NodeJs</Description.Highlight>,{' '}
        <Description.Highlight>Prisma</Description.Highlight>,{' '}
        <Description.Highlight>PostgreSQL</Description.Highlight>, and{' '}
        <Description.Highlight>Resend</Description.Highlight>.
      </Description.Paragraph>
      <div className="mt-4 grid w-fit grid-cols-3 grid-rows-2 gap-x-12 text-sm">
        <span className="text-gray-200">Role</span>
        <span className="text-gray-200">Platform</span>
        <span className="text-gray-200">Category</span>
        <span className="text-gray-100">Full Stack Developer</span>
        <span className="text-gray-100">Descktop / Mobile</span>
        <span className="text-gray-100">Company Website</span>
      </div>
    </Description.Root>
  )
}
export default IbProjectDescription
