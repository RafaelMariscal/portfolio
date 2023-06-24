import NavLogo from '@/assets/NavLogo'
import CustomLink from './CustomLink'

export default function Footer() {
  return (
    <div
      role="container"
      className="flex w-full max-w-7xl justify-between px-3 drop-shadow-custom-text"
    >
      <div>
        <NavLogo />
        Footer
      </div>
      <nav>
        <ul className="flex flex-col gap-4">
          <CustomLink href={'/'} text="Home" />
          <CustomLink href={'/#briefing'} text="Briefing" useScroll />
          <CustomLink href={'/#projects'} text="Projects" useScroll />
          <CustomLink href={'/#experience'} text="Experience" useScroll />
          <CustomLink href={'/about'} text="About" />
        </ul>
        <span>© 2023</span>
      </nav>
    </div>
  )
}
