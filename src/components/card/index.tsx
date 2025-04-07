'use client'

import { cva } from 'class-variance-authority'
import { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export type CardVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'

const cardVariants = cva(
  'nds-border-1 nds-rounded nds-rounded-sm nds-border nds-p-4 nds-shadow-sm hover:nds-shadow-lg',
  {
    variants: {
      variant: {
        default: 'nds-bg-white',
        primary: 'nds-bg-primary',
        secondary: 'nds-bg-secondary',
        success: 'nds-bg-success',
        error: 'nds-bg-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
}

export default function Card({ className, variant, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant }), className)} {...props} />
}
