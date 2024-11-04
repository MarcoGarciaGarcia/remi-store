'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Link, cn } from '@nextui-org/react'
import { LocalStorageEnum } from '@/enum'
import { useLocalStore } from '@/hooks'
import { Routes } from '@/routes'
import { sendAnalitycs } from '@/service'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

const BannerCookies: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const { getLocalStoreItem, setLocalStoreItem } = useLocalStore()
  const route = useRouter()

  const acceptCookies = getLocalStoreItem(LocalStorageEnum.ACEPT_COOKIES)

  const toggleCookie = (value: boolean) => {
    const event = value
      ? 'buttonClicked_accept_cookies'
      : 'buttonClicked_decline_cookies'
    const eventValue = value ? 'accept' : 'decline'

    sendAnalitycs({ event, value: eventValue })
    setLocalStoreItem(LocalStorageEnum.ACEPT_COOKIES, JSON.stringify(value))

    setIsMounted(false)

    route.refresh()
  }

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true)
    }, 2000)

    return () => {
      setIsMounted(false)
    }
  }, [])

  return (
    <AnimatePresence>
      {isMounted && (
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 400 }}
          transition={{
            duration: 2
          }}
          className={cn(
            'block fixed bg-white left-0 right-0 mx-auto md:mx-0 md:left-5 bottom-5 p-5 w-72 max-w-md z-40 leading-[150%] rounded-xl shadow-lg text-center transition-opacity',
            !acceptCookies ? 'opacity-100' : 'hidden opacity-0'
          )}>
          <div className='relative'>
            <Button
              radius='full'
              isIconOnly
              size='sm'
              className='group absolute -top-2 -right-2 bg-transparent border-2 hover:border-black hover:bg-black transition-colors'
              onClick={() => toggleCookie(false)}>
              <X className='w-6 h-6 text-gray-300 group-hover:text-white' />
            </Button>
            <svg
              className='w-14 h-14 mx-auto mb-4'
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              fill='#000000'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  className='fill-[#FFC033]'
                  d='M471.801,434.713C423.206,484.554,358.118,512,288.536,512c-13.594,0-26.945-1.07-39.97-3.114 C126.312,489.645,32.533,383.558,32.533,255.997c0-68.08,26.308-132.124,74.091-180.327c38.833-39.172,88.241-64.261,141.941-72.588 c12.376-1.936,24.968-2.965,37.723-3.074c27.798-0.217,55.217,3.967,81.444,12.498c8.652,2.816,15.49,9.681,18.279,18.347 c2.789,8.652,1.232,18.184-4.143,25.482c-19.308,26.254-29.517,57.41-29.517,90.109c0,48.636,22.422,93.197,61.54,122.267 c8.896,6.608,12.863,18.239,9.884,28.949c-1.977,7.095-2.979,14.434-2.979,21.813c0,30.574,16.898,58.29,44.087,72.358 c7.555,3.9,12.877,11.252,14.244,19.674C480.48,419.927,477.745,428.606,471.801,434.713z'></path>{' '}
                <path
                  className='fill-[#F9A926]'
                  d='M471.801,434.713C423.206,484.554,358.118,512,288.536,512c-13.594,0-26.945-1.07-39.97-3.114V3.082 c12.376-1.936,24.968-2.965,37.723-3.074c27.798-0.217,55.217,3.967,81.444,12.498c8.652,2.816,15.49,9.681,18.279,18.347 c2.789,8.652,1.232,18.184-4.143,25.482c-19.308,26.254-29.517,57.41-29.517,90.109c0,48.636,22.422,93.197,61.54,122.267 c8.896,6.608,12.863,18.239,9.884,28.949c-1.977,7.095-2.979,14.434-2.979,21.813c0,30.574,16.898,58.29,44.087,72.358 c7.555,3.9,12.877,11.252,14.244,19.674C480.48,419.927,477.745,428.606,471.801,434.713z'></path>{' '}
                <path
                  className='fill-[#A6673A]'
                  d='M270.027,177.519c0,31.237-25.401,56.638-56.638,56.638s-56.638-25.401-56.638-56.638 s25.401-56.638,56.638-56.638S270.027,146.282,270.027,177.519z'></path>{' '}
                <path
                  className='fill-[#99522E]'
                  d='M270.027,177.519c0,31.237-25.401,56.638-56.638,56.638V120.88 C244.625,120.88,270.027,146.282,270.027,177.519z'></path>{' '}
                <path
                  className='fill-[#A6673A]'
                  d='M253.63,315.709c0,35.665-29.03,64.681-64.695,64.681s-64.681-29.016-64.681-64.681 s29.016-64.695,64.681-64.695S253.63,280.044,253.63,315.709z'></path>{' '}
                <path
                  className='fill-[#99522E]'
                  d='M253.63,315.709c0,35.665-29.03,64.681-64.695,64.681V251.014 C224.6,251.014,253.63,280.044,253.63,315.709z'></path>{' '}
                <path
                  className='fill-[#A6673A]'
                  d='M356.751,362.314c0,27.134-22.084,49.218-49.232,49.218c-27.134,0-49.218-22.084-49.218-49.218 c0-27.148,22.084-49.232,49.218-49.232C334.667,313.082,356.751,335.166,356.751,362.314z'></path>{' '}
                <path
                  className='fill-[#99522E]'
                  d='M356.751,362.314c0,27.134-22.084,49.218-49.232,49.218v-98.45 C334.667,313.082,356.751,335.166,356.751,362.314z'></path>{' '}
              </g>
            </svg>
            <h3 className='text-base md:text-xl font-extrabold mb-2'>
              Consentimiento de cookies
            </h3>
            <p className='text-xs md:text-sm mb-4'>
              Usamos cookies esenciales y adicionales para mejorar el sitio,
              entender su uso y recordar preferencias. También usamos cookies de
              terceros para contenido.
            </p>

            <button
              type='button'
              className='block mx-auto mb-4 text-black bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 shadow-lg shadow-primary-500/50 font-base rounded-lg text-tiny px-3 md:px-5 py-2 md:py-2.5 text-center'
              onClick={() => toggleCookie(true)}>
              Aceptar
            </button>

            <Link
              className='text-gray-600 decoration-gray-400 text-xs md:text-sm'
              underline='always'
              href={Routes.LEGAL + Routes.COOKIES_POLICY}>
              Aviso de Cookies
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default BannerCookies
