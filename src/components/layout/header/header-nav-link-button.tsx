'use client'

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
        className="text-primary hover:text-primary-foreground uppercase
              shadow-sm border border-auxiliary md:border-hidden
              py-8 md:py-6 md:px-5 md:hover:scale-110 w-full
              bg-background/[0.25] md:dark:bg-black/[0.25]
              hover:dark:bg-primary group-hover:shadow-[0_0px_5px_rgba(0,202,255,1)]"
        onClick={onCloseMenu}
      >
        {name}
      </Button>
    </Link>
  )
}
