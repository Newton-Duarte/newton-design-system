import { cva } from 'class-variance-authority'
import { HTMLProps } from 'react'
import { cn } from '../../lib/utils'

export type InputVariant = 'default'

const inputVariants = cva(
  'border-1 h-10 rounded-sm border border-gray-400 px-4 focus:border-none focus:outline-none focus:ring-2 focus:ring-primary',
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
    <input className={cn(inputVariants({ variant, className }))} {...props} />
  )
}

export default Input
