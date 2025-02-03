'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { cn } from '@nextui-org/react'

interface ITextGenerateEffectProps {
  words: string
  className?: string
}

const TextGenerateEffect: React.FC<ITextGenerateEffectProps> = ({
  words,
  className
}) => {
  // eslint-disable-next-line prefer-const
  let wordsArray = words.split(' ')

  return (
    <LazyMotion features={domAnimation}>
      {wordsArray.map((word, idx) => {
        return (
          <m.span
            key={word + idx}
            className={cn(className, 'dark:text-white text-black ')}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              delay: 0.18 * idx
            }}>
            {word}{' '}
          </m.span>
        )
      })}
    </LazyMotion>
  )
}

export default TextGenerateEffect
