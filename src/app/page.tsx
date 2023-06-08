import NavLogo from '@/assets/NavLogo'
import NavLinks from '@/components/NavLinks'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-cyan-800">
      <div className="flex w-full max-w-[1060px] gap-3 px-3 py-6">
        <Link
          href={'/'}
          className="outline-none transition-all focus:scale-[1.05]"
        >
          <NavLogo />
        </Link>

        <NavLinks />
      </div>
    </main>
  )
}
