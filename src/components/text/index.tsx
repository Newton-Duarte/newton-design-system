'use client'

import React from 'react'
import { cva } from 'class-variance-authority'
import {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  JSX,
} from 'react'
import { cn } from '../../lib/utils'

export type TextVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
export type TextSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const textVariants = cva('nds-text-md nds-leading-base', {
  variants: {
    variant: {
      default: 'nds-text-gray-800',
      primary: 'nds-text-primary',
      secondary: 'nds-text-secondary',
      success: 'nds-text-success',
      error: 'nds-text-error',
    },
    size: {
      xxs: 'nds-text-xxs',
      xs: 'nds-text-xs',
      sm: 'nds-text-sm',
      md: 'nds-text-md',
      lg: 'nds-text-lg',
      xl: 'nds-text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export interface TextProps<T extends ElementType>
  extends HTMLAttributes<JSX.IntrinsicAttributes> {
  as?: T
  variant?: TextVariant
  size?: TextSize
}

type ReturnProps<P extends ElementType> = TextProps<P> &
  Omit<ComponentPropsWithoutRef<P>, keyof TextProps<P>>

function Text<T extends ElementType = 'p'>({
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
      className={cn(textVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export default Text
