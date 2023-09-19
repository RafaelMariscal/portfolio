import Highlight from '@/components/Basic/Highlight'
import List from '@/components/Basic/List'
import Paragraph from '@/components/Basic/Paragraph'
import Title from '@/components/Basic/Title'
import ProjectBriefing from '@/components/ProjectsPage/ProjectBriefing'

function RdProjectBriefing() {
  return (
    <ProjectBriefing.Root>
      <ProjectBriefing.Content>
        <Title className="max-w-md">
          Understanding the Environment and the Client&rsquo;s Needs.
        </Title>
        <Paragraph>
          RD Inspection was struggling with their system because the company was
          growing, and as the company expanded, so did its requirements. In this
          scenario,{' '}
          <Highlight>
            the customer&rsquo;s primary issue highlighted by the company was
            the inspection process
          </Highlight>
          .
        </Paragraph>
        <Paragraph>
          To address this, we started the project planning by evaluating two
          critical aspects:
        </Paragraph>
        <List.Content>
          <List.Item>
            The overall Client Journey, evaluating the entire client experience.
          </List.Item>
          <List.Item>
            Identification of the primary issues within the inspection process.
          </List.Item>
        </List.Content>
        <Paragraph>
          In addition to that, it was mandatory that the new system retained all
          existing features, while introducing new enhancements aiming at{' '}
          <Highlight>
            boosting the overall performance, productivity and also taking
            client experience to the next level
          </Highlight>
          .
        </Paragraph>
        <Paragraph>
          Then <Highlight>we created the software flowchart</Highlight> and only
          after its approval, we started to create the main classes, data types,
          database schemas, we also listed all the artifacts required from the
          inception to the final stages, and finally, we started the Front End
          design/prototype.
        </Paragraph>
        <Paragraph>
          <Highlight>
            The main issue pointed by the clients was the inspection process
          </Highlight>
          , witch previously, it was based in a two-step process:
        </Paragraph>
        <List.Content>
          <List.Item>
            RD Engineer shares a third-party API link for clients to upload
            vehicle pictures.
          </List.Item>
          <List.Item>
            The Engineer followed up with a separate link for a recorded
            meeting, where the technical inspection took place.
          </List.Item>
        </List.Content>
        <Paragraph>
          Recognizing the inefficiencies of this two-step process,{' '}
          <Highlight>
            we decided to create a REST API to combine these features
          </Highlight>{' '}
          into a streamlined workflow. Now, clients can schedule meetings only
          after the vehicle picture status has been confirmed.
        </Paragraph>
        <Paragraph>
          The RD CRM is still in development, but I&rsquo;ll leave here some
          recent screenshots, as well as some brief explanations of its current
          functionality.
        </Paragraph>
      </ProjectBriefing.Content>
    </ProjectBriefing.Root>
  )
}
export default RdProjectBriefing
