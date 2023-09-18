import Navigation from './Navigation'
import Image from 'next/image'
import RdImageSrc from '@/assets/projects/rd-project.png'

export default function RdInspectionsPage() {
  return (
    <>
      <Navigation />
      <main className="flex w-full flex-col items-center justify-center">
        <Image
          src={RdImageSrc}
          alt="Rd inspections software promo image."
          quality={100}
          className="z-10 h-full max-h-screen w-full object-cover"
          placeholder="blur"
        />
      </main>
    </>
  )
}
