'use client'

import { useState } from 'react'

import { HeaderLogo } from '@/components/layout/header/header-logo'
import { HamburgerButton } from '@/components/twilight/hamburger-button/hamburger-button'
import { HeaderNavLinkButtonsContainer } from '@/components/layout/header/header-nav-link-buttons-container'
import { ThemeToggle } from '@/components/twilight/theme-toggle/theme-toggle'

export function Header({
  logo,
  links,
}: {
  logo: string
  links: { name: string, path: string }[]
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Top Header */}
      <header className="group fixed py-3 z-50 w-full overflow-hidden border-b-[0.25px] border-b-auxiliary backdrop-blur-xl transition-all duration-700 hover:shadow-[0_0px_15px_rgba(0,202,255,0.5)]">
        <div className="mx-auto flex w-full max-w-7xl justify-between items-center px-3 md:px-8">
          {/* Header Logo */}
          <div>
            <HeaderLogo logo={logo} />
          </div>

          <div>
            {/* Hamburger Button */}
            <span className="md:hidden">
              <ThemeToggle />
            </span>
            <HamburgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <nav className="hidden md:block">
              <menu className="flex flex-nowrap bg-transparent items-center md:space-x-4">
                <HeaderNavLinkButtonsContainer
                  links={links}
                  setMenuOpen={setMenuOpen}
                />
                <ThemeToggle />
              </menu>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        <menu
          className={`flex flex-col fixed right-0 top-20 z-50 w-fit space-y-4 rounded-xl border border-card p-4 backdrop-blur-xl transition duration-700 ease-in-out ${
            menuOpen ? 'mr-4' : 'translate-x-full md:translate-x-0'
          }`}
        >
          <HeaderNavLinkButtonsContainer
            links={links}
            setMenuOpen={setMenuOpen}
          />
        </menu>
      </nav>
      {/* The reason why the menu navigation menu is not nested inside the header tag is because the stacking contexts created by the backdrop blur property causes the menu tag to not render, hence why they cannot be nested. */}
    </>
  )
}
