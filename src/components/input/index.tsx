'use client'

import React from 'react'
import { cva } from 'class-variance-authority'
import { HTMLProps } from 'react'
import { cn } from '../../lib/utils'

export type InputVariant = 'default'

const inputVariants = cva(
  'nds-border-1 nds-h-10 nds-rounded-sm nds-border nds-border-gray-400 nds-px-4 focus:nds-border-none focus:nds-outline-none focus:nds-ring-2 focus:nds-ring-primary',
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface InputProps extends HTMLProps<HTMLInputElement> {
  variant?: InputVariant
}

function Input({ className, variant, ...props }: InputProps) {
  return (
    <input className={cn(inputVariants({ variant }), className)} {...props} />
  )
}

export default Input
