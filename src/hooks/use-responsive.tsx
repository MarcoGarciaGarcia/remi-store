import { useMediaQuery } from 'react-responsive'

type BreakpointType = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export const useResponsive = (breakpoint: BreakpointType): boolean => {
  const mediaQueries: Record<BreakpointType, string> = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)'
  }
  return useMediaQuery({ query: mediaQueries[breakpoint] })
}
