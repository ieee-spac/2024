import Link from 'next/link'
import Image from 'next/image'

export function HeaderLogo({ logo }: { logo: string }) {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="Logo"
        className="h-10 w-auto transition-all duration-500 ease-in-out hover:scale-110 md:h-16"
        height={40}
        width={40}
      />
    </Link>
  )
}
