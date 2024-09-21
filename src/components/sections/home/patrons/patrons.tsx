import type { StaticImageData } from 'next/image'
import Image from 'next/image'

/*
 * import drdc_canada_logo from '@root/public/assets/drdc_canada_logo.svg'
 * import fdm_logo from '@root/public/assets/fdm_logo.svg'
 * import general_dynamics_logo from '@root/public/assets/general_dynamics_logo.svg'
 * import public_service_commission_of_canada_logo from '@root/public/assets/public_service_commission_of_canada_logo.svg'
 * import ross_video_logo from '@root/public/assets/ross_video_logo.svg'
 * import uber_logo from '@root/public/assets/uber_logo.svg' */

import ciena_logo from '@root/public/assets/ciena_logo.svg'
import nokia_logo from '@root/public/assets/nokia_logo.svg'
import ericsson_logo from '@root/public/assets/ericsson_logo.svg'
import blackberry_qnx_logo from '@root/public/assets/blackberry_qnx_logo.svg'
import uottawa_ieee_logo from '@root/public/assets/uottawa_ieee_logo.svg'
import ised_logo from '@root/public/assets/ised_logo.svg'
import nrc_logo from '@root/public/assets/nrc_logo.svg'
import solace_logo from '@root/public/assets/solace_logo.svg'
import cse_logo from '@root/public/assets/cse_logo.svg'
import cbsa_logo from '@root/public/assets/canada_border_services_logo.svg'
import { Spotlight } from '@/components/twilight/spotlight/spotlight'
// import { SponsorshipPackage } from '@/components/sections/home/hero/sponsorship-package'
import { ShinyButton } from '@/components/twilight/shiny-button/shiny-button'

// Logo and Tier types
interface Logo {
  src: StaticImageData
  alt: string
  url: string
  overrides: string
}

interface Tier {
  [key: string]: Logo[]
}

const patronsData: Tier = {
  platinum: [
    {
      src: blackberry_qnx_logo,
      alt: 'QNX logo',
      url: 'https://blackberry.qnx.com',
      overrides: 'w-full bobbing-animation-1',
    },
  ],
  gold: [
    {
      src: ericsson_logo,
      alt: 'Ericsson logo',
      url: 'https://www.ericsson.com/en/about-us/company-facts/ericsson-worldwide/canada',
      overrides: 'w-1/4 bobbing-animation-1',
    },
  ],
  silver: [
    {
      src: ciena_logo,
      alt: 'Ciena Logo',
      url: 'https://www.ciena.com',
      overrides: 'w-1/2 bobbing-animation-3',
    },
    {
      src: cse_logo,
      alt: 'CSE Logo',
      url: 'https://www.cse-cst.gc.ca',
      overrides: 'w-1/2 bobbing-animation-3',
    },
    {
      src: nrc_logo,
      alt: 'NRC Logo',
      url: 'https://nrc.canada.ca/en',
      overrides: 'w-1/3 bobbing-animation-3',
    },
    {
      src: cbsa_logo,
      alt: 'Canada Border Services Agency (CBSA) Logo',
      url: 'https://www.cbsa-asfc.gc.ca/menu-eng.html',
      overrides: 'w-1/4 bobbing-animation-3',
    },
    {
      src: ised_logo,
      alt: 'ISED logo',
      url: 'https://ised-isde.canada.ca/site/ised/en',
      overrides: 'w-1/2 bobbing-animation-2 block',
    },
    {
      src: uottawa_ieee_logo,
      alt: 'uOttawa IEEE Logo',
      url: 'https://ieeeuottawa.ca',
      overrides: 'w-1/3 bobbing-animation-4',
    },
  ],
  bronze: [
    {
      src: nokia_logo,
      alt: 'Nokia logo',
      url: 'https://www.nokia.com',
      overrides: 'w-1/4 bobbing-animation-1',
    },
    {
      src: solace_logo,
      alt: 'Solace logo',
      url: 'https://solace.com',
      overrides: 'w-1/4 bobbing-animation-1',
    },
  ],
}

// Render logos for each section
function LogoSection({
  title,
  titleColor,
  logos,
  gradientClass,
}: {
  title: string
  titleColor: string
  logos?: Logo[]
  gradientClass: string
}) {
  return (
    <>
      <h3
        className={`text-3xl font-semibold sm:text-4xl md:text-5xl ${titleColor} mb-4`}
      >
        {title}
      </h3>
      <span
        className={`block bg-gradient-to-r ${gradientClass} mb-4 p-[0.5px]`}
      />
      <div className="mb-8 flex items-end justify-center">
        {logos
        && logos.map(logo => (
          <a
            key={logo.alt}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center ${logo.overrides} p-2`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="transition-all duration-700 hover:scale-110"
            />
          </a>
        ))}
      </div>
    </>
  )
}

export function Patrons() {
  return (
    <div id="patronage" className="mx-auto mt-20 max-w-3xl px-3 md:px-8">
      <h2 className="mb-10 text-5xl font-bold text-primary sm:text-6xl">
        Our Patrons
      </h2>
      <Spotlight
        className="-left-20 top-[150rem] md:left-10 md:top-[140rem]"
        fill="LightGoldenRodYellow"
      />
      <LogoSection
        title="Platinum"
        titleColor="text-warning"
        logos={patronsData.platinum}
        gradientClass="from-warning via-accent to-black"
      />
      <LogoSection
        title="Gold"
        titleColor="text-tertiary"
        logos={patronsData.gold}
        gradientClass="from-accent via-secondary to-black"
      />
      <LogoSection
        title="Silver"
        titleColor="text-slate-400"
        logos={patronsData.silver}
        gradientClass="from-primary via-secondary to-black"
      />
      <LogoSection
        title="Bronze"
        titleColor="text-amber-800"
        logos={patronsData.bronze}
        gradientClass="from-primary via-secondary to-black"
      />
      <span className="inline-flex w-full justify-center">
        {/* <SponsorshipPackage /> */}
        <a
          href="https://drive.google.com/file/d/1wfvpv5T8Xg-cmt5kmps9Gzlddq9_Cdc0/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShinyButton
            text="Become a Patron"
          />
        </a>
      </span>
    </div>
  )
}
