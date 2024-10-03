import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { useTheme } from 'next-themes'
import { getLogoByTheme } from '@/components/sections/home/patrons/patrons.data'

interface Logo {
  light: StaticImageData
  dark: StaticImageData
  alt: string
  url: string
  overrides: string
}

interface LogoSectionProps {
  title: string
  titleColor: string
  logos?: Logo[]
  gradientClass: string
}

export function LogoSection({
  title,
  titleColor,
  logos,
  gradientClass,
}: LogoSectionProps) {
  const { theme } = useTheme()

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
      <div className="mb-8 flex flex-wrap items-end justify-around items-center">
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
              src={getLogoByTheme(theme, logo)}
              alt={logo.alt}
              className="transition-all duration-700 hover:scale-110"
            />
          </a>
        ))}
      </div>
    </>
  )
}
