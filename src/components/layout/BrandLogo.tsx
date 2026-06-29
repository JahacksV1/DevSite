import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SITE_LOGO, SITE_NAME } from '@/lib/constants'

interface BrandLogoProps {
  size?: number
  showWordmark?: boolean
  wordmarkClassName?: string
  imageClassName?: string
  className?: string
  priority?: boolean
}

export const BrandLogo = ({
  size = 64,
  showWordmark = true,
  wordmarkClassName,
  imageClassName,
  className,
  priority = false,
}: BrandLogoProps) => {
  return (
    <span className={cn('flex items-center gap-3 min-w-0', className)}>
      <Image
        src={SITE_LOGO}
        alt={`${SITE_NAME} logo`}
        width={size}
        height={size}
        priority={priority}
        className={cn(
          'shrink-0 rounded-[22%] h-14 w-14 md:h-16 md:w-16',
          imageClassName
        )}
      />
      {showWordmark && (
        <span
          className={cn(
            'text-lg md:text-xl font-bold text-text-primary truncate',
            wordmarkClassName
          )}
        >
          {SITE_NAME}
        </span>
      )}
    </span>
  )
}
