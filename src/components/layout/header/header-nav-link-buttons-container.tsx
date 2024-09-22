import { HeaderNavLinkButton } from '@/components/layout/header/header-nav-link-button'

export function HeaderNavLinkButtonsContainer({ links, setMenuOpen }: { links: { name: string, path: string }[], setMenuOpen: (open: boolean) => void }) {
  const handleCloseMenu = () => setMenuOpen(false)

  return (
    <>
      {links.map(link => (
        <HeaderNavLinkButton
          key={link.path}
          name={link.name}
          path={link.path}
          onCloseMenu={handleCloseMenu}
        />
      ))}
    </>
  )
}
