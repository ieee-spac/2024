'use client'
import { patronsData } from '@/components/sections/home/patrons/patrons.data'
import { ShinyButton } from '@/components/twilight/shiny-button/shiny-button'
import { LogoSection } from '@/components/sections/home/patrons/patrons-tier'

const LINK_PATRONAGE_PACKAGE = 'https://drive.google.com/file/d/1wfvpv5T8Xg-cmt5kmps9Gzlddq9_Cdc0/view?usp=sharing'

export function Patrons() {
  return (
    <div id="patronage" className="mx-auto mt-20 max-w-3xl px-3 md:px-8">
      <h2 className="mb-10 text-5xl font-bold text-primary sm:text-6xl">
        Our Patrons
      </h2>
      <LogoSection
        title="Platinum"
        titleColor="text-warning"
        logos={patronsData.platinum}
        gradientClass="from-warning to-background"
      />
      <LogoSection
        title="Gold"
        titleColor="text-tertiary"
        logos={patronsData.gold}
        gradientClass="from-tertiary to-background"
      />
      <LogoSection
        title="Silver"
        titleColor="text-slate-400"
        logos={patronsData.silver}
        gradientClass="from-slate-400 to-background"
      />
      <LogoSection
        title="Bronze"
        titleColor="text-amber-800"
        logos={patronsData.bronze}
        gradientClass="from-amber-800 to-background"
      />
      <span className="inline-flex w-full justify-center">
        <a
          href={LINK_PATRONAGE_PACKAGE}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShinyButton text="Become a Patron" />
        </a>
      </span>
    </div>
  )
}
