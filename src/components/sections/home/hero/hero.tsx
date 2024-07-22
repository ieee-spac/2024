import Image from 'next/image'

import logo from '@root/public/assets/spac_logo_year_stars.svg'
import { SponsorshipPackage } from '@/components/sections/home/hero/sponsorship-package'

export function Hero() {
  return (
    // Grid background container
    // <div className="min-h-screen flex justify-center items-center p-4 w-full dark:bg-black bg-white dark:bg-grid-green-600/[0.5] bg-grid-black/[0.2] overflow-none">
    <div
      id="home"
      className="overflow-none flex h-screen w-full items-center justify-center bg-black p-4 bg-grid-green-600/[0.5]"
    >
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-black" /> */}
      <div className="pointer-events-none absolute inset-0 flex h-screen items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]" />

      {/* Center box */}
      <main className="backdrop-blur-xs group flex h-fit w-full max-w-4xl flex-col items-center justify-center space-y-4 rounded-lg border border-secondary px-4 py-8 transition-all duration-300 ease-in-out hover:shadow-[0_0px_15px_rgba(0,202,255,1)] md:px-20 md:py-16">
        {/* Logo */}
        <Image
          priority
          src={logo}
          alt="Main SPAC logo with year and stars"
          className="bobbing-animation-1 w-full max-w-lg transition-all duration-700 ease-in-out group-hover:drop-shadow-[0_0px_5px_rgba(0,202,255,1)] sm:max-w-xl"
        />

        {/* Text */}
        <div className="flex flex-col items-center space-y-2 text-center">
          <p className="text-lg font-semibold md:text-2xl">
            IEEE Student Professional Awareness Conference
          </p>
          <p className="text-xs md:text-xl">
            November 1
            <sup>st</sup>
            {' '}
            |
            {' '}
            <a
              href="https://maps.app.goo.gl/wk5vdFH7StaCvsJf7"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Brookstreet Hotel
            </a>
          </p>
        </div>
        <SponsorshipPackage />
      </main>
    </div>
  )
}
