import Highlight from '@/components/Basic/Highlight'
import List from '@/components/Basic/List'
import Paragraph from '@/components/Basic/Paragraph'
import Title from '@/components/Basic/Title'
import ProjectBriefing from '@/components/ProjectsPage/ProjectBriefing'
import RdFlowchartSrc from '@/assets/projects/rd-inspection/rd-front-end-flowchart.png'
import Image from 'next/image'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

function RdProjectBriefing({ lang }: { lang: Locale }) {
  const {
    rdProjectPage: {
      briefing: {
        article: { title, ...paragraphs },
      },
    },
  } = getDictionaryServerOnly(lang)

  const paragraphsKeys = Object.keys(paragraphs) as (keyof typeof paragraphs)[]

  return (
    <div id="projectBriefing" className="grid w-full place-items-center pt-14">
      <ProjectBriefing.Root>
        <ProjectBriefing.Content>
          <Title className="max-w-md">{title}</Title>

          {paragraphsKeys.map((key) => {
            const firstChar = key.at(0)
            const currParagraph = paragraphs[key]

            if (firstChar !== 'p') {
              return (
                <List.Content key={key}>
                  {currParagraph.map((text, index) => (
                    <List.Item key={text + index}>{text}</List.Item>
                  ))}
                </List.Content>
              )
            } else {
              return (
                <Paragraph key={key}>
                  {currParagraph.map((text, index) => {
                    if (index % 2) {
                      return <Highlight key={text + index}>{text}</Highlight>
                    } else {
                      return text
                    }
                  })}
                </Paragraph>
              )
            }
          })}
        </ProjectBriefing.Content>
      </ProjectBriefing.Root>

      <Image
        src={RdFlowchartSrc}
        alt="Rd Project Flowchart"
        className="absolute -z-10 h-auto w-screen max-w-screen-2xl opacity-30"
      />
    </div>
  )
}
export default RdProjectBriefing
