import { cva, type VariantProps } from 'class-variance-authority'
import { ElementType, HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils'

const textVariants = cva('text-md leading-base', {
  variants: {
    variant: {
      default: 'text-gray-800',
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-success',
      error: 'text-error',
    },
    size: {
      xxs: 'text-xxs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: ElementType
}

export const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ className, variant, size, as: Tag = 'p', ...props }, ref) => (
    <Tag
      ref={ref}
      className={cn(textVariants({ variant, size, className }))}
      {...props}
    />
  )
)

Text.displayName = 'Text'
