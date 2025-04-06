import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

const cardVariants = cva(
  'rounded-sm, border-1 rounded border bg-white p-4 shadow-sm',
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

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ className, variant, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant, className }))} {...props} />
}
