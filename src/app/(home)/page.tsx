import { Footer } from '@/components/layout/footer/footer'
import { Header } from '@/components/layout/header/header'
import { About } from '@/components/sections/home/about/about'
import { Contact } from '@/components/sections/home/contact/contact'
import { Hero } from '@/components/sections/home/hero/hero'
import { Patrons } from '@/components/sections/home/patrons/patrons'

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Patrons />
      <Contact />
      <Footer />
    </>
  )
}
