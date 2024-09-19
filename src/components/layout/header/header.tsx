'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import Logo from '@root/public/assets/ieee_spac_logo_vertical_no_year.svg'
import { HeaderNavLinkButton } from './header-nav-link-button'
import { HamburgerButton } from '@/components/twilight/hamburger-button/hamburger-button'

const links = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  // { name: "Schedule", path: "/schedule" },
  { name: 'Patronage', path: '#patronage' },
  // { name: "Gallery", path: "/gallery" },
  // { name: "FAQ", path: "/faq" },
  { name: 'Contact', path: '#contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  function HeaderNavLinkButtonsContainer() {
    return (
      <>
        {links.map(link =>
          HeaderNavLinkButton({
            name: link.name,
            path: link.path,
            onCloseMenu: () => setMenuOpen(false),
          }),
        )}
      </>
    )
  }

  return (
    <>
      {/* Top Header */}
      <header className="group fixed py-3 z-50 w-full overflow-hidden border-b-[0.25px] border-b-auxiliary backdrop-blur-xl transition-all duration-700 hover:shadow-[0_0px_15px_rgba(0,202,255,0.5)]">
        <div className="mx-auto flex w-full max-w-7xl justify-between items-center px-3 md:px-8">
          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="IEEE SPAC Logo"
                className="h-10 w-auto transition-all duration-500 ease-in-out hover:scale-110 md:h-16"
              />
            </Link>
          </div>

          <div>
            <HamburgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <nav className="hidden md:block">
              <menu className="flex flex-nowrap bg-transparent md:space-x-4 ">
                <HeaderNavLinkButtonsContainer />
              </menu>
            </nav>
          </div>
        </div>
      </header>

      {/* Navigation Menu for Mobile */}
      <nav className="md:hidden">
        <menu
          className={`flex flex-col fixed right-0 top-20 z-50 w-fit space-y-4 rounded-xl border border-card p-4 backdrop-blur-xl transition duration-700 ease-in-out ${menuOpen ? 'mr-4' : 'translate-x-full md:translate-x-0'}`}
        >
          <HeaderNavLinkButtonsContainer />
        </menu>
      </nav>

      {/* The reason why the menu navigation menu is not nested inside the header tag is because the stacking contexts created by the backdrop blur property causes the menu tag to not render, hence why they cannot be nested. */}
    </>
  )
}
