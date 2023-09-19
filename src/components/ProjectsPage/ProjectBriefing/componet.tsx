import Highlight from '@/components/Basic/Highlight'
import List from '@/components/Basic/List'
import Paragraph from '@/components/Basic/Paragraph'
import SectionTitle from '@/components/Basic/SectionTitle'
import Title from '@/components/Basic/Title'

function ProjectBriefing() {
  return (
    <section
      className="
        w-full max-w-4xl border border-cyan-700 bg-cyan-800/70 px-6 py-4 
        shadow-md shadow-dark/40 backdrop-blur-sm
      "
    >
      <SectionTitle>
        Project<Highlight className="ml-1">Briefing</Highlight>
      </SectionTitle>

      <div className="mt-6 flex gap-1">
        <div className="flex h-3 w-full max-w-[8.5rem] items-end">
          <hr className="h-[.125rem] w-14 bg-gray-100" />
        </div>

        <div className="flex flex-col gap-3">
          <Title className="max-w-md">
            Understanding the Environment and the Client&rsquo;s Needs.
          </Title>
          <Paragraph>
            RD Inspection was struggling with their system because the company
            was growing, and as the company expanded, so did its requirements{' '}
            <Highlight>
              The client&rsquo;s main issue was the current inspection process
              that they had to navigate, in order to take the report
            </Highlight>
            .
          </Paragraph>
          <Paragraph>
            Based on this scenario, we started the project planning by
            evaluating two critical aspects:
          </Paragraph>
          <List.Content>
            <List.Item>The overall Client Journey.</List.Item>
            <List.Item>
              Identify the primary issues within the inspection process.
            </List.Item>
          </List.Content>
          <Paragraph>
            In addition to that, it was mandatory that the new system retained
            all existing features, while introducing new enhancements aiming at{' '}
            <Highlight>
              boosting the overall performance, productivity and also take
              client experience to the next level
            </Highlight>
            .
          </Paragraph>
          <Paragraph>
            Then <Highlight>we created the software flowchart</Highlight> and
            only after approval, we started to create the main classes, data
            types, database schemas, we also listed all the artifacts required
            from the inception to the final stages, and finally, we started the
            Front End design/prototype.
          </Paragraph>
          <Paragraph>
            <Highlight>
              The main issue pointed by the clients was the inspection process
            </Highlight>
            , witch previously, it was based in a two-step process:
          </Paragraph>
          <List.Content>
            <List.Item>
              RD Engineer share a third-party API link for clients to upload
              vehicle pictures.
            </List.Item>
            <List.Item>
              The Engineer follow up with a separate link for a recorded
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
            recent screenshots, as well as some brief explanations of its
            current functionality.
          </Paragraph>
        </div>
      </div>
    </section>
  )
}
export default ProjectBriefing
