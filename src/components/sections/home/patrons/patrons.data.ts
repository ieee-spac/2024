import type { StaticImageData } from 'next/image'

import ciena_logo from '@root/public/assets/ciena_logo.svg'
import nokia_logo from '@root/public/assets/nokia_logo.svg'
import ieee_uottawa_logo_light from '@root/public/assets/ieee_uottawa_logo_light.svg'
import ieee_uottawa_logo_dark from '@root/public/assets/ieee_uottawa_logo_dark.svg'
import ericsson_logo from '@root/public/assets/ericsson_logo.svg'
import blackberry_qnx_logo_light from '@root/public/assets/blackberry_qnx_logo_light.svg'
import blackberry_qnx_logo_dark from '@root/public/assets/blackberry_qnx_logo_dark.svg'
import ised_logo_dark from '@root/public/assets/ised_logo_dark.svg'
import ised_logo_light from '@root/public/assets/ised_logo_light.svg'
import eef_uottawa_logo_light from '@root/public/assets/eef_uottawa_logo_light.svg'
import eef_uottawa_logo_dark from '@root/public/assets/eef_uottawa_logo_dark.svg'
import nrc_logo from '@root/public/assets/nrc_logo.png'
import solace_logo from '@root/public/assets/solace_logo.svg'
// import cse_logo_dark from '@root/public/assets/cse_logo_dark.svg'
// import cse_logo_light from '@root/public/assets/cse_logo_light.svg'
import cse_logo_dark from '@root/public/assets/cse_logo_dark.png'
import cse_logo_light from '@root/public/assets/cse_logo_light.png'
import cbsa_logo from '@root/public/assets/canada_border_services_logo.jpg'
import skyworks_logo from '@root/public/assets/skyworks_logo.svg'
import skyworks_logo_white from '@root/public/assets/skyworks_logo_white.png'

interface Logo {
  light: StaticImageData
  dark: StaticImageData
  alt: string
  url: string
  overrides: string
}

interface Tier {
  [key: string]: Logo[]
}

export const patronsData: Tier = {
  platinum: [
    {
      light: blackberry_qnx_logo_light,
      dark: blackberry_qnx_logo_dark,
      alt: 'QNX logo',
      url: 'https://blackberry.qnx.com',
      overrides: 'w-full bobbing-animation-1',
    },
  ],
  gold: [
    {
      light: ericsson_logo,
      dark: ericsson_logo,
      alt: 'Ericsson logo',
      url: 'https://www.ericsson.com/en/about-us/company-facts/ericsson-worldwide/canada',
      overrides: 'w-1/4 bobbing-animation-2',
    },
  ],
  silver: [
    {
      light: ciena_logo,
      dark: ciena_logo,
      alt: 'Ciena Logo',
      url: 'https://www.ciena.com',
      overrides: 'w-1/3 bobbing-animation-3',
    },
    {
      light: skyworks_logo,
      dark: skyworks_logo_white,
      alt: 'Skyworks Logo',
      url: 'https://www.skyworksinc.com',
      overrides: 'w-1/3 bobbing-animation-3',
    },
    {
      light: cse_logo_light,
      dark: cse_logo_dark,
      alt: 'CSE Logo',
      url: 'https://www.cse-cst.gc.ca',
      overrides: 'w-1/3 bobbing-animation-3',
    },
    {
      light: ised_logo_light,
      dark: ised_logo_dark,
      alt: 'ISED logo',
      url: 'https://ised-isde.canada.ca/site/ised/en',
      overrides: 'w-1/2 bobbing-animation-3',
    },
    {
      light: nrc_logo,
      dark: nrc_logo,
      alt: 'NRC Logo',
      url: 'https://nrc.canada.ca/en',
      overrides: 'w-1/3 bobbing-animation-3',
    },
    {
      light: cbsa_logo,
      dark: cbsa_logo,
      alt: 'Canada Border Services Agency (CBSA) Logo',
      url: 'https://www.cbsa-asfc.gc.ca/menu-eng.html',
      overrides: 'w-1/4 bobbing-animation-3',
    },
    {
      light: eef_uottawa_logo_light,
      dark: eef_uottawa_logo_dark,
      alt: 'EEF uOttawa logo',
      url: 'https://www.uottawa.ca/faculty-engineering/student-experience/funding-student-initiatives',
      overrides: 'w-1/2 bobbing-animation-3',
    },
    {
      light: ieee_uottawa_logo_light,
      dark: ieee_uottawa_logo_dark,
      alt: 'uOttawa IEEE Logo',
      url: 'https://ieeeuottawa.ca',
      overrides: 'w-1/4 bobbing-animation-3',
    },
  ],
  bronze: [
    {
      light: nokia_logo,
      dark: nokia_logo,
      alt: 'Nokia logo',
      url: 'https://www.nokia.com',
      overrides: 'w-1/4 bobbing-animation-4',
    },
    {
      light: solace_logo,
      dark: solace_logo,
      alt: 'Solace logo',
      url: 'https://solace.com',
      overrides: 'w-1/4 bobbing-animation-4',
    },
  ],
}

// Utility function to return the correct logo based on the theme
export function getLogoByTheme(theme: string | undefined, logo: Logo) {
  return theme === 'light' ? logo.light : logo.dark
}
