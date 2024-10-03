import Link from 'next/link'
import { FaFacebookF, FaFigma, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { SiChromatic, SiStorybook } from 'react-icons/si'
import Image from 'next/image'
import ieee_spac_logo_combined_horizontal from '@root/public/assets/ieee_spac_logo_combined_horizontal.svg'
import { cn } from '@/components/utils/cn'

function DEFAULT_LOGO_IMAGE() {
  return (
    <Image
      src={ieee_spac_logo_combined_horizontal}
      alt="IEEE SPAC Footer Logo"
      className="h-6 w-auto transition-all duration-700 hover:scale-105"
    />
  )
}

const DEFAULT_SOCIAL_MEDIA_ICONS_LIST = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ieeespac/?hl=en',
    Icon: FaInstagram,
    className: 'hover:text-rose-500',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/ieeespac/',
    Icon: FaLinkedinIn,
    className: 'hover:text-sky-700',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/ieeespacottawa/',
    Icon: FaFacebookF,
    className: 'hover:text-blue-600',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ieee-spac/2024',
    Icon: FaGithub,
    className: 'hover:text-green-500',
  },
  {
    name: 'Figma',
    url: 'https://www.figma.com/community/file/1417704325784085062/ieee-spac-2024-twilight-design-system',
    Icon: FaFigma,
    className: 'hover:text-indigo-400',
  },
  {
    name: 'Storybook',
    url: 'https://665264891b6bc70eded9109a-fejlvqtgov.chromatic.com/?path=/docs/welcome--docs',
    Icon: SiStorybook,
    className: 'hover:text-pink-500',
  },
  {
    name: 'Chromatic',
    url: 'https://www.chromatic.com/library?appId=665264891b6bc70eded9109a&branch=dev',
    Icon: SiChromatic,
    className: 'hover:text-orange-600',
  },
]

export function Footer({
  Logo = DEFAULT_LOGO_IMAGE,
  socialMediaData = DEFAULT_SOCIAL_MEDIA_ICONS_LIST,
}: {
  Logo?: React.ComponentType
  socialMediaData?: {
    name: string
    url: string
    Icon: React.ComponentType
    className: string
  }[]
}) {
  return (
    <footer className="border-t-[0.25px] border-secondary text-neutral-content transition-all duration-700 hover:shadow-[0_0px_15px_rgba(0,202,255,0.5)]">
      <div className="mx-auto w-full max-w-7xl px-3 py-4 md:px-8">

        {/* LOGO and SOCIAL MEDIA ICONS in one row */}
        <div className="flex flex-wrap justify-between items-start">
          {/* LOGO */}
          <aside className="flex flex-col">
            <Link href="/" className="scroll-smooth">
              <Logo />
            </Link>
            <p>Copyright © 2024 IEEE - All rights reserved.</p>
          </aside>

          {/* SOCIAL MEDIA ICONS */}
          <nav className="flex flex-wrap justify-center 2xs:justify-end">
            {socialMediaData.map(({ name, url, Icon, className }) => (
              <a
                key={name}
                aria-label={`${name} Link`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn('transition-all duration-700 hover:scale-125 p-4 text-2xl', className)}
              >
                <Icon />
              </a>
            ))}
          </nav>
        </div>

        {/* CREDITS */}
        <div className="mt-6 text-sm md:text-center">
          <p>
            Inspired by the
            {' '}
            <a
              href="https://www.figma.com/design/rxRdlFbCkzJDezvIPPaQvo/IEEE-SPAC-2024?node-id=902-880&t=ZldInFyhfowPbI3q-1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary underline transition ease-in-out duration-700"
            >
              2022 SPAC Website
            </a>
            .
            Brand Cover made with 💙 by
            {
              ' '
            }
            <a
              href="https://www.linkedin.com/in/aashna-verma-000/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-auxiliary
underline transition ease-in-out duration-700
                     "
            >
              Aashna Verma
            </a>
            .
            Re-designed & developed with 🧡 by
            {
              ' '
            }
            <a
              href="https://www.linkedin.com/in/mfarabi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warning underline transition ease-in-out duration-700"
            >
              Mumtahin Farabi
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
