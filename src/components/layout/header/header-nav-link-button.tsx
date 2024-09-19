import Link from 'next/link'
import { Button } from '@/components/shadcn/ui/button/button'

export function HeaderNavLinkButton({
  name,
  path,
  onCloseMenu,
}: {
  name: string
  path: string
  onCloseMenu: () => void
}) {
  return (
    <Link key={name} href={path} scroll>
      <Button
        size="lg"
        className="text-primary shadow-sm hover:text-primary-foreground py-8 w-full bg-black/[0.25] border border-auxiliary md:border-hidden uppercase md:bg-black/[0.25] md:py-6 md:px-5 md:hover:scale-110 hover:bg-auxiliary group-hover:shadow-[0_0px_5px_rgba(0,202,255,1)]"
        onClick={onCloseMenu}
      >
        {name}
      </Button>
    </Link>
  )
}
