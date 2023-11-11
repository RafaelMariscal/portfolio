import Description from '@/components/ProjectsPage/Description'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

function RdProjectDescription({ lang }: { lang: Locale }) {
  const {
    rdProjectPage: {
      description: { p1, p2, table },
    },
  } = getDictionaryServerOnly(lang)
  return (
    <Description.Root>
      <Description.Paragraph className="max-w-screen-tablets-sm text-xl leading-tight">
        {p1.map((text, index) => {
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

      <Description.Paragraph className="mt-4">
        {p2.map((text, index) => {
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
export default RdProjectDescription
