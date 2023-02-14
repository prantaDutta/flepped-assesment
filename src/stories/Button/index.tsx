import React, { ButtonHTMLAttributes, useMemo } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this primary button, will have primary colors
   */
  primary?: boolean
  /**
   * Is this the secondary button, will have secondary color
   */
  secondary?: boolean
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button Title
   */
  title?: string
  /**
   * Make the button uppercase
   */
  uppercase?: boolean
  /**
   * Optional click handler
   */
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({
  title = 'Button',
  primary,
  secondary,
  size,
  uppercase = false,
  children,
  ...props
}) => {
  // Getting memoized size classes from the useMemo hook
  const sizeClassNames = useMemo(() => {
    if (size === 'small') {
      return 'px-2 py-1 text-[10px]'
    }
    if (size === 'large') {
      return 'px-6 py-3 text-xl'
    }
    return 'px-4 py-2 text-sm'
  }, [size])
  return (
    <button
      {...props}
      className={`${sizeClassNames} ${
        primary ? 'bg-primary text-white' : 'bg-gray-200 text-black'
      } ${
        uppercase ? 'uppercase' : 'capitalize'
      } mx-2 my-1 rounded-lg font-semibold`}
    >
      {children ?? title}
    </button>
  )
}

export default Button
