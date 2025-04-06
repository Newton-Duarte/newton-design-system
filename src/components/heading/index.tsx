import { cva, type VariantProps } from 'class-variance-authority'
import {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  JSX,
} from 'react'
import { cn } from '../../lib/utils'

const headingVariants = cva('font-bold leading-short', {
  variants: {
    variant: {
      default: 'text-gray-800',
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-success',
      error: 'text-error',
    },
    size: {
      '2xl': 'text-2xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: '2xl',
  },
})

export interface HeadingProps<T extends ElementType>
  extends HTMLAttributes<JSX.IntrinsicAttributes>,
    VariantProps<typeof headingVariants> {
  as?: T
}

type ReturnProps<P extends ElementType> = HeadingProps<P> &
  Omit<ComponentPropsWithoutRef<P>, keyof HeadingProps<P>>

export function Heading<T extends ElementType = 'h1'>({
  className,
  variant,
  size,
  as,
  ...props
}: ReturnProps<T>) {
  let Tag: ElementType = 'h1'

  if (as) {
    Tag = as
  }

  return (
    <Tag
      className={cn(headingVariants({ variant, size, className }))}
      {...props}
    />
  )
}
