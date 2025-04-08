'use client'

import { cva } from 'class-variance-authority'
import {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  JSX,
} from 'react'
import { cn } from '../../lib/utils'

export type HeadingVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
export type HeadingSize = '2xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'

const headingVariants = cva('nds-font-bold nds-leading-short', {
  variants: {
    variant: {
      default: 'nds-text-gray-800',
      primary: 'nds-text-primary',
      secondary: 'nds-text-secondary',
      success: 'nds-text-success',
      error: 'nds-text-error',
    },
    size: {
      '2xl': 'nds-text-2xl',
      '4xl': 'nds-text-4xl',
      '5xl': 'nds-text-5xl',
      '6xl': 'nds-text-6xl',
      '7xl': 'nds-text-7xl',
      '8xl': 'nds-text-8xl',
      '9xl': 'nds-text-9xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: '2xl',
  },
})

export interface HeadingProps<T extends ElementType>
  extends HTMLAttributes<JSX.IntrinsicAttributes> {
  as?: T
  variant?: HeadingVariant
  size?: HeadingSize
}

type ReturnProps<P extends ElementType> = HeadingProps<P> &
  Omit<ComponentPropsWithoutRef<P>, keyof HeadingProps<P>>

function Heading<T extends ElementType = 'h1'>({
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
      className={cn(headingVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export default Heading
