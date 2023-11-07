import Highlight from '@/components/Basic/Highlight'
import List from '@/components/Basic/List'
import Paragraph from '@/components/Basic/Paragraph'
import Title from '@/components/Basic/Title'
import ProjectBriefing from '@/components/ProjectsPage/ProjectBriefing'

function JpProjectBriefing() {
  return (
    <div id="projectBriefing" className="grid w-full place-items-center pt-14">
      <ProjectBriefing.Root>
        <ProjectBriefing.Content>
          <Title className="max-w-md">
            Understanding the Client&rsquo;s Needs.
          </Title>
          <Paragraph>
            Jacked Planner is a SaaS developed for Gyms, Personal Trainers and
            Fitness Enthusiasts that serves as{' '}
            <Highlight>
              a platform responsible for documenting and tracking fitness goals
            </Highlight>
            .
          </Paragraph>
          <Paragraph>
            The central idea behind Jacked Planner is to{' '}
            <Highlight>provide a user-friendly tool</Highlight> that not only
            <Highlight>simplifies the creation of training plans</Highlight> but
            also{' '}
            <Highlight>
              facilitates the monitoring of the key metrics and the effective
              tracking
            </Highlight>{' '}
            of the results achieved through dedicated plan adherence.
          </Paragraph>
          <Paragraph>
            We started this project by planning{' '}
            <Highlight>
              the core features for creating a training plan, and tacking its
              results
            </Highlight>
            . Consequently, we have identified the following essential features:
          </Paragraph>
          <List.Content>
            <List.Item>
              Authentication and Authorization based on User / Roles.
            </List.Item>
            <List.Item>
              Users can create and manage up to 3 Training Planners with the
              Free Plan.
            </List.Item>
            <List.Item>
              CRUD operations for Training Planner, Exercises and Sets.
            </List.Item>
            <List.Item>
              Users can take notes regarding Reps Completed and Weight lifted
              for each exercise set.
            </List.Item>
            <List.Item>
              Users are able to take notes for each training day.
            </List.Item>
          </List.Content>
          <Paragraph>
            In this context, we kicked off the screen design process and
            initiated the planning of the technologies we would use to bring
            this application to life.
          </Paragraph>
        </ProjectBriefing.Content>
      </ProjectBriefing.Root>
    </div>
  )
}
export default JpProjectBriefing
