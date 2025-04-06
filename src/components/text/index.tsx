import { cva, type VariantProps } from 'class-variance-authority'
import {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  JSX,
} from 'react'
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

export interface TextProps<T extends ElementType>
  extends HTMLAttributes<JSX.IntrinsicAttributes>,
    VariantProps<typeof textVariants> {
  as?: T
}

type ReturnProps<P extends ElementType> = TextProps<P> &
  Omit<ComponentPropsWithoutRef<P>, keyof TextProps<P>>

export function Text<T extends ElementType = 'p'>({
  className,
  variant,
  size,
  as,
  ...props
}: ReturnProps<T>) {
  let Tag: ElementType = 'p'

  if (as) {
    Tag = as
  }

  return (
    <Tag
      className={cn(textVariants({ variant, size, className }))}
      {...props}
    />
  )
}
