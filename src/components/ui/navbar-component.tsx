'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  Button,
  Link,
  ScrollShadow,
  cn
} from '@nextui-org/react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { useStore } from '@/hooks'
import { Routes } from '@/routes'
import { usePathname } from 'next/navigation'

interface ISubmenu {
  label: string
  description?: string
  href?: string
}

interface IRoute {
  label: string
  activeUrl: string
  submenu?: ISubmenu[]
}

const Navbar: React.FC = () => {
  const pathname = usePathname()

  const [activeLabel, setActiveLabel] = useState<string>(pathname)
  const { openNavbar, toggleChangeNavbar } = useStore()

  const routes: IRoute[] = [
    {
      label: 'Inicio',
      activeUrl: Routes.HOME,
      submenu: [
        {
          label: 'Inicio',
          description:
            'Únete a nuestra comunidad educativa comprometida con la excelencia y el crecimiento personal. Te damos la bienvenida a un campus inspirador con iniciativas innovadoras. ',
          href: Routes.HOME
        }
      ]
    },
    {
      label: 'Nosotros',
      activeUrl: Routes.ABOUT,
      submenu: [
        {
          label: 'Nosotros',
          description:
            'Sumérgete en nuestra institución, donde la excelencia es la norma. Con una misión centrada en el desarrollo integral y una filosofía de aprendizaje transformador, estamos liderados por un equipo comprometido con tu éxito.',
          href: Routes.ABOUT
        }
      ]
    },
    {
      label: 'Oferta Educativa',
      activeUrl: Routes.EDUCATION_OFFER,
      submenu: [
        {
          label: 'Licenciaturas',
          description:
            'Descubre tu camino hacia el éxito con nuestras licenciaturas. Con programas innovadores y profesorado de élite, te preparamos para destacar en el mundo profesional en constante evolución. ',
          href: `${Routes.EDUCATION_OFFER}#licenciaturas`
        },
        {
          label: 'Maestrías',
          description:
            'Eleva tu carrera con nuestras maestrías especializadas. Enfocadas en la excelencia académica y la aplicación práctica, te brindamos las herramientas necesarias para liderar en tu campo.',
          href: `${Routes.EDUCATION_OFFER}#maestrias`
        },
        {
          label: 'Formas de titulación',
          description:
            'Elige tu camino hacia la graduación. Desde obtener créditos de posgrado hasta destacar por excelencia académica, nuestra universidad ofrece diversas vías para alcanzar tu título.',
          href: `${Routes.DEGREE_FORMS}`
        }
      ]
    },
    {
      label: 'Contacto',
      activeUrl: Routes.CONTACT,
      submenu: [
        {
          label: 'Contacto',
          description:
            '¿Tienes alguna pregunta? ¡No dudes en ponerte en contacto con nosotros! Estamos aquí para ayudarte en cada paso del camino hacia tu éxito educativo.',
          href: Routes.CONTACT
        },
        {
          label: 'Mapa',
          description:
            'Descubre nuestro instituto educativo en el corazón de la ciudad. Nuestro mapa interactivo te guiará hacia una experiencia educativa excepcional.',
          href: `${Routes.CONTACT}#map`
        }
      ]
    },
    {
      label: 'FAQs',
      activeUrl: Routes.FAQ,
      submenu: [
        {
          label: 'Preguntas Frecuentes',
          description:
            'Resolvemos tus preguntas con claridad y precisión. Explora nuestras preguntas frecuentes para obtener respuestas sobre admisiones, programas académicos y vida estudiantil en nuestra universidad.',
          href: Routes.FAQ
        }
      ]
    },{
      label: 'Plataforma',
      activeUrl: Routes.PLATFORM,
      submenu: [
        {
          label: 'Inicio de sesión',
          description:
            'Plataforma educativa.',
          href: Routes.PLATFORM
        }
      ]
    }
    // {
    //   label: 'Novedades',
    //   activeUrl: Routes.NEWS,
    //   submenu: [
    //     {
    //       label: 'Novedades',
    //       description:
    //         'Mantente al día con lo último en nuestra universidad. Desde eventos emocionantes hasta avances académicos, descubre las noticias que impulsan nuestro compromiso con la excelencia educativa.',
    //       href: Routes.NEWS
    //     }
    //   ]
    // }
  ]

  return (
    <AnimatePresence>
      {openNavbar && (
        <motion.nav
          className='box fixed w-screen h-screen z-50 bg-black text-white'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <div className='grid relative grid-cols-1 md:grid-cols-12 w-screen h-screen px-8 lg:px-16'>
            <Button
              className='bg-transparent hidden md:flex items-center absolute top-4 right-8 data-[hover=true]:opacity-100 text-white font-bold hover:text-black transition-colors hover:bg-white'
              onClick={() => toggleChangeNavbar(false)}
              endContent={<X className='w-5 h-5' />}
              aria-label='Close menu desktop'>
              Cerrar
            </Button>

            <Button
              isIconOnly
              className='bg-transparent absolute md:hidden top-4 right-4 data-[hover=true]:opacity-100 text-white font-bold hover:text-black transition-colors hover:bg-white'
              onClick={() => toggleChangeNavbar(false)}
              radius='full'
              aria-label='Close menu mobile'>
              <X className='h-6 w-6' />
            </Button>
            <div className='hidden md:flex relative flex-col items-start gap-4 col-span-3 before:content-[" "] before:absolute before:w-[1px] before:rounded-full before:h-[90%] before:bg-white before:bottom-0 before:right-0'>
              

              <div className='flex relative flex-col items-start gap-4'>
                {routes.map((route) => (
                  <button
                    onClick={() => setActiveLabel(route.activeUrl)}
                    key={route.activeUrl}
                    className={cn(
                      route.activeUrl === activeLabel
                        ? 'text-white before:animate-grow-to-the-right'
                        : 'text-zinc-400',
                      'text-4xl relative text-start bg-transparent hover:text-white data-[hover=true]:opacity-100 oswald-bold before:content-[" "] before:w-[0] before:absolute before:h-[1px] before:bg-white before:rounded-full before:-bottom-1'
                    )}>
                    {route.label}
                  </button>
                ))}
              </div>
            </div>
            <div className='hidden md:flex relative flex-col h-screen items-start justify-center gap-6 col-span-9 w-[80%] mx-auto'>
              {activeLabel &&
                routes
                  .find((route: IRoute) => route.activeUrl === activeLabel)
                  ?.submenu?.map((submenu: ISubmenu, index: number) => (
                    <motion.div
                      key={submenu.label}
                      className='max-w-lg'
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 * index,
                        duration: 1
                      }}>
                      <Link
                        href={submenu?.href}
                        onPress={() => toggleChangeNavbar(false)}
                        className='text-white font-semibold text-xl flex items-center gap-2 mb-2'>
                        {submenu.label}
                        <ArrowRight className='w-5 h-5 stroke-primary stroke-2' />
                      </Link>
                      <p className='pl-4 text-base text-zinc-300'>
                        {submenu.description}
                      </p>
                    </motion.div>
                  ))}
            </div>

            <div className='block md:hidden h-[100dvh]'>
              <div className='mb-2'>
                
              </div>
              <ScrollShadow className='flex relative flex-col items-start gap-4 h-[80dvh]'>
                <Accordion isCompact>
                  {routes.map((route) => (
                    <AccordionItem
                      key={route.label}
                      onPress={() => setActiveLabel(route.label)}
                      aria-label={`Accordion ${route.label}`}
                      title={
                        <p
                          className={cn(
                            route.activeUrl === activeLabel
                              ? 'text-white before:animate-grow-to-the-right'
                              : 'text-zinc-400',
                            'text-3xl relative bg-transparent w-[fit-content] hover:text-white data-[hover=true]:opacity-100 oswald-bold before:content-[" "] before:w-[0] before:absolute before:h-[1px] before:bg-white before:rounded-full before:-bottom-1'
                          )}>
                          {route.label}
                        </p>
                      }>
                      <div className='flex flex-col gap-y-6 p-4'>
                        {route.submenu?.map((submenu: ISubmenu) => (
                          <div key={submenu.label}>
                            <Link
                              href={submenu?.href}
                              onPress={() => toggleChangeNavbar(false)}
                              className='text-white font-semibold text-lg flex items-center gap-2 mb-2'>
                              {submenu.label}
                              <ArrowRight className='w-5 h-5 stroke-primary stroke-2' />
                            </Link>
                            <p className='pl-4 text-sm text-zinc-300'>
                              {submenu.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollShadow>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
export default Navbar
