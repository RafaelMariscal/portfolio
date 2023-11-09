import FilePdf from '@/assets/icons/FilePdf'
import { Experience } from './ExperienceCompose'
import NavLink from '../Navigation/NavLink'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

export default function Experiences({ lang }: { lang: Locale }) {
  const { experiences } = getDictionaryServerOnly(lang)

  return (
    <div
      id="experience"
      className="
        flex w-full max-w-screen-xl justify-between gap-12 px-3 py-10 max-tablets-sm:flex-col
        max-md:max-w-[30.625rem]
      "
    >
      <div className="max flex w-full max-w-sm flex-col gap-4">
        <h2 className="text-2xl font-bold underline underline-offset-4 drop-shadow-custom-text">
          {experiences.mainExperiences.title}
        </h2>

        {experiences.mainExperiences.list.map((exp, index) => (
          <Experience.Root key={exp.company + index}>
            <Experience.Content text={exp.role} />
            <Experience.Description className="flex items-center justify-between gap-4">
              <span className="w-full max-w-max truncate">{exp.company}</span>
              <span className="w-full max-w-max">{exp.timePeriod}</span>
            </Experience.Description>
          </Experience.Root>
        ))}
      </div>

      <div className="flex w-full max-w-[37.5rem] flex-col gap-4 max-tablets-sm:max-w-full">
        <h2 className="text-2xl font-bold underline underline-offset-4 drop-shadow-custom-text">
          Bootcamps and Papers
        </h2>

        {experiences.bootcampsAndPappers.list.map((extraActivity, index) => (
          <Experience.Root key={extraActivity.title + index}>
            <Experience.Content text={extraActivity.title} />
            <Experience.Description>
              <p>{extraActivity.description}</p>
              <Experience.Footer className="mt-1 transition-all">
                {index === 2 ? (
                  <NavLink
                    href="/pdf/Objectives_and_Key_Results_Framework_Implementation_Case_Study.pdf"
                    title={extraActivity.highlight}
                    className="
                    flex items-center gap-1 text-cyan-400 [&_*]:duration-100
                    [&_*]:hover:fill-cyan-500 [&_*]:focus:fill-cyan-500
                  "
                    newTab
                  >
                    <FilePdf className="scale-75" />
                  </NavLink>
                ) : (
                  <p>{extraActivity.highlight}</p>
                )}
              </Experience.Footer>
            </Experience.Description>
          </Experience.Root>
        ))}
      </div>
    </div>
  )
}
