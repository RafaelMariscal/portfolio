import Description from '@/components/ProjectsPage/Description'

function RdProjectDescription() {
  return (
    <Description.Root>
      <Description.Paragraph className="max-w-screen-tablets-sm text-xl leading-tight">
        I am a{' '}
        <Description.Highlight>Full Stack Developer</Description.Highlight> at{' '}
        <Description.Highlight>RD Inspections</Description.Highlight>, an online
        vehicle inspection company specialized in delivering vehicle technical
        reports in Ceará, Brazil. Therefore, this project is presented in
        Portuguese-BR.{' '}
      </Description.Paragraph>
      <Description.Paragraph className="mt-4">
        I’ve been enrolled with this project since the client’s first
        Description{' '}
        <Description.Highlight>
          leading the Front End team
        </Description.Highlight>
        , striving to create the best CRM design for the company.{' '}
        <Description.Highlight>
          Simultaneously, I collaborate with the Back End team
        </Description.Highlight>
        , providing them with the necessary tools to develop the most efficient
        REST APIs for our software.
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
          <Description.ItemContent>
            Company System / CRM
          </Description.ItemContent>
        </Description.TableItem>
      </Description.Table>
    </Description.Root>
  )
}
export default RdProjectDescription
