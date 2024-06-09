'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { HamburgerButton } from '@/components/ui/hamburger-button/hamburger-button';
import Logo from '@/public/assets/ieee_spac_logo_vertical_no_year.svg';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  // { name: "Schedule", path: "/schedule" },
  { name: 'Patronage', path: '/patronage' },
  // { name: "Gallery", path: "/gallery" },
  // { name: "FAQ", path: "/faq" },
  { name: 'Contact', path: '/contact' },
];

const NavigationLinks = ({ onCloseMenu }: { onCloseMenu: () => void }) => (
  <>
    {links.map((link) => (
      <Link key={link.name} href={link.path}>
        <button
          className="btn btn-block btn-lg btn-primary btn-outline md:btn-ghost bg-black/[0.25] uppercase md:bg-black/[0.25]"
          onClick={onCloseMenu}
        >
          {link.name}
        </button>
      </Link>
    ))}
  </>
);

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Top Header */}
      <header className="navbar border-b-secondary fixed z-50 overflow-hidden border-b-[0.25px] backdrop-blur-xl transition-all duration-700 hover:shadow-[0_0px_15px_rgba(0,202,255,0.5)]">
        <div className="mx-auto flex w-full max-w-7xl justify-between px-3 md:px-8">
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
              <menu className="menu menu-horizontal flex-nowrap bg-transparent md:space-x-4 ">
                <NavigationLinks onCloseMenu={() => setMenuOpen(false)} />
              </menu>
            </nav>
          </div>
        </div>
      </header>

      {/* Navigation Menu for both Desktop and Mobile */}
      <nav className="md:hidden">
        {/* The menu tag is the same as ul, just a bit more semantic in the context of navbars */}
        <menu
          className={`menu menu-vertical border-secondary border-opacity fixed right-0 top-20 z-50 w-fit space-y-4 rounded-xl border p-4 backdrop-blur-xl transition duration-700 ease-in-out${menuOpen ? 'mr-4' : 'translate-x-full md:translate-x-0'}`}
        >
          <NavigationLinks onCloseMenu={() => setMenuOpen(false)} />
        </menu>
      </nav>

      {/* The reason why the menu navigation menu is not nested inside the header tag is because the stacking contexts created by the backdrop blur property causes the menu tag to not render, hence why they cannot be nested. */}
    </>
  );
};
