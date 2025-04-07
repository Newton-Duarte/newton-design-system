import { cva } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export type ButtonVariant = 'default' | 'outline' | 'ghost' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'

const buttonVariants = cva(
  'focus:nds-ring-ring nds-inline-flex nds-items-center nds-justify-center nds-rounded-md nds-text-sm nds-font-medium nds-text-primary nds-transition-colors focus:nds-outline-none focus:nds-ring-2 focus:nds-ring-offset-2 disabled:nds-pointer-events-none disabled:nds-opacity-50',
  {
    variants: {
      variant: {
        default: 'nds-bg-primary nds-text-white hover:nds-bg-primary/90',
        outline:
          'nds-border-input nds-border nds-border-primary hover:nds-bg-primary hover:nds-text-white',
        ghost: 'hover:nds-bg-primary hover:nds-text-white',
        link: 'nds-underline-offset-4 hover:nds-underline',
      },
      size: {
        sm: 'nds-h-8 nds-rounded-md nds-px-3',
        md: 'nds-h-10 nds-rounded-md nds-px-4',
        lg: 'nds-h-12 nds-rounded-md nds-px-6 nds-text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export default Button
