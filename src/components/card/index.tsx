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
  'border-1 rounded rounded-sm border bg-white p-4 shadow-sm',
  {
    variants: {
      variant: {
        default: '',
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary',
        success: 'bg-success',
        error: 'bg-error',
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
  return <div className={cn(cardVariants({ variant, className }))} {...props} />
}
