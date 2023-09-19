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
      <div className="mt-4 grid w-fit grid-cols-3 grid-rows-2 gap-x-12 text-sm">
        <span className="text-gray-200">Role</span>
        <span className="text-gray-200">Platform</span>
        <span className="text-gray-200">Category</span>
        <span className="text-gray-100">Full Stack Developer</span>
        <span className="text-gray-100">Descktop / Mobile</span>
        <span className="text-gray-100">Company System / CRM</span>
      </div>
    </Description.Root>
  )
}
export default RdProjectDescription
