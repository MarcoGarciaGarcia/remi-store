'use client'

import { Button, cn } from '@nextui-org/react'
import { Menu } from 'lucide-react'
import { useStore } from '@/hooks'
import { Navbar } from '.'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Routes } from '@/routes'
import Link from 'next/link'

const Header: React.FC = () => {
  const { toggleChangeNavbar } = useStore()
  const { scrollY } = useScroll()
  const [onMovingScroll, setOnMovingScroll] = useState<boolean>(false)
  const pathname = usePathname()

  // Hook que nos ayuda a saber cuando el scroll en en eje Y se esta moviendo
  useMotionValueEvent(scrollY, 'change', (latest) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    latest > 0 ? setOnMovingScroll(true) : setOnMovingScroll(false)
  })

  // Agregamos un array para saber en que url se cambiara el imagotipo por la variante
  const variantUrlImagotipo: string[] = [
    Routes.ABOUT,
    Routes.EDUCATION_OFFER,
    Routes.MASTER,
    Routes.DEGREE,
    Routes.CONTACT,
    Routes.DEGREE_FORMS
  ]

  const filterPathname =
    pathname.split('/').length > 2 ? `/${pathname.split('/')[1]}` : pathname

  // En caso de que coincida la url en la que estamos y que no se este moviendo el scroll cambiara la variante
  const isActiveVariantLogo =
    variantUrlImagotipo.includes(filterPathname) && !onMovingScroll

  return (
    <>
      <header
        className={cn(
          'w-screen h-16 flex fixed items-center justify-between px-4 md:px-16 z-50 transition-colors',
          onMovingScroll ? 'bg-white/50  backdrop-blur-sm' : 'bg-transparent'
        )}>
        <Link href={Routes.HOME}>
          {isActiveVariantLogo ? (
            <div />
          ) : (
            <div />
          )}
        </Link>
        <Button
          className={cn(
            isActiveVariantLogo
              ? 'text-white hover:text-black hover:bg-white'
              : 'text-black hover:text-white hover:bg-black',
            'bg-transparent font-bold transition-colors '
          )}
          onClick={() => toggleChangeNavbar(true)}
          startContent={<Menu />}>
          Menú
        </Button>
      </header>
      <Navbar />
    </>
  )
}
export default Header
