import Description from '@/components/ProjectsPage/Description'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

function JpProjectDescription({ lang }: { lang: Locale }) {
  const {
    jpProjectPage: {
      description: { table, ...paragraphs },
    },
  } = getDictionaryServerOnly(lang)

  const paragraphsKeys = Object.keys(paragraphs) as (keyof typeof paragraphs)[]

  return (
    <Description.Root>
      {paragraphsKeys.map((key) => {
        const currParagraph = paragraphs[key]
        return (
          <Description.Paragraph key={key} className="[&~p]:mt-4">
            {currParagraph.map((text, index) => {
              if (index % 2) {
                return (
                  <Description.Highlight key={text + index}>
                    {text}
                  </Description.Highlight>
                )
              } else {
                return text
              }
            })}
          </Description.Paragraph>
        )
      })}
      <Description.Table>
        {table.map((item, index) => (
          <Description.TableItem key={item.head + index}>
            <Description.ItemHeader>{item.head}</Description.ItemHeader>
            <Description.ItemContent>{item.body}</Description.ItemContent>
          </Description.TableItem>
        ))}
      </Description.Table>
    </Description.Root>
  )
}
export default JpProjectDescription
