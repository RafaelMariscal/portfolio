import Highlight from '@/components/Basic/Highlight'
import List from '@/components/Basic/List'
import Paragraph from '@/components/Basic/Paragraph'
import Title from '@/components/Basic/Title'
import ProjectBriefing from '@/components/ProjectsPage/ProjectBriefing'

function IbProjectBriefing() {
  return (
    <div id="projectBriefing" className="grid w-full place-items-center pt-14">
      <ProjectBriefing.Root>
        <ProjectBriefing.Content>
          <Title className="max-w-md">Understanding the Project.</Title>
          <Paragraph>
            When I first joined the Inbox Refeições, one of my initial
            responsibilities was to design and develop the company&rsquo;s
            website. At the time, my confidence in web development was limited,
            so we opted to create it using a development platform. However, as
            time went by, the website&rsquo;s design became outdated and less
            appealing,{' '}
            <Highlight>leading to the need for a complete redesign</Highlight>.
          </Paragraph>
          <Paragraph>
            My task was to redesign and develop the company’s website, in order{' '}
            <Highlight>
              to effectively showcasing the services offered
            </Highlight>{' '}
            and{' '}
            <Highlight>
              simplifying the process of obtaining service quotes
            </Highlight>
            . This process offered an opportunity to implement enhancements
            focused on improving the user experience and presenting essential
            information more effectively, witch included:
          </Paragraph>

          <List.Content>
            <List.Item>
              Highlighting the services provided by the company.
            </List.Item>
            <List.Item>
              Emphasizing the key advantages of using the company’s services.
            </List.Item>
            <List.Item>
              Showcasing the core foundations of the company.
            </List.Item>
            <List.Item>
              Providing a more user-friendly way to obtaining service quotes.
            </List.Item>
          </List.Content>
          <Paragraph>
            In this context, I initiated the project by planning the
            technologies we would use to bring this website to life, followed by
            the design of screens and components.
          </Paragraph>
        </ProjectBriefing.Content>
      </ProjectBriefing.Root>
    </div>
  )
}
export default IbProjectBriefing
