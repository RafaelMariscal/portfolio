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

      <Description.Table>
        <Description.TableItem>
          <Description.ItemHeader>Role</Description.ItemHeader>
          <Description.ItemContent>
            Full Stack Developer
          </Description.ItemContent>
        </Description.TableItem>
        <Description.TableItem>
          <Description.ItemHeader>Platform</Description.ItemHeader>
          <Description.ItemContent>Desktop / Mobile</Description.ItemContent>
        </Description.TableItem>
        <Description.TableItem>
          <Description.ItemHeader>Category</Description.ItemHeader>
          <Description.ItemContent>Company Website</Description.ItemContent>
        </Description.TableItem>
      </Description.Table>
    </Description.Root>
  )
}
export default IbProjectDescription
