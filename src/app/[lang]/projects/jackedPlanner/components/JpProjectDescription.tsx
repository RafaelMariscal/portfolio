import Description from '@/components/ProjectsPage/Description'

function JpProjectDescription() {
  return (
    <Description.Root>
      <Description.Paragraph className="max-w-screen-tablets-sm text-xl leading-tight">
        I was a{' '}
        <Description.Highlight>Full Stack Developer</Description.Highlight> at{' '}
        <Description.Highlight>Jacked Planner</Description.Highlight> - a Gym
        SaaS focused on streamlining the creation of Training Planners. In this
        project, I played a multifaceted role including design, development and
        deployment.
      </Description.Paragraph>
      <Description.Paragraph className="mt-4">
        For the Design, I used{' '}
        <Description.Highlight>Figma</Description.Highlight> to tackle its
        tasks, ensuring a user-friendly and visually appealing interface. On the
        Front End, I employed a{' '}
        <Description.Highlight>SPA approach using React</Description.Highlight>,
        and for the Back End I used{' '}
        <Description.Highlight>Firebase</Description.Highlight> services, which
        provided capabilities for Authentication, Cloud Database and Hosting.
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
          <Description.ItemContent>Saas / Gym / Sports</Description.ItemContent>
        </Description.TableItem>
      </Description.Table>
    </Description.Root>
  )
}
export default JpProjectDescription
