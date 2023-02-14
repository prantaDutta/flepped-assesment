import React, { InputHTMLAttributes, ReactElement, ReactNode } from 'react'

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
  leftElement?: ReactElement
  rightElement?: ReactElement
}

export const TextInputGroup: React.FC<ITextInputProps> = ({
  leftElement,
  rightElement,
  placeholder = 'Enter Text...',
  ...props
}) => {
  return (
    <div className={`flex items-center justify-center`}>
      {/*Left Element*/}
      {leftElement && <div>{leftElement}</div>}
      {/*Input*/}
      <div>
        <input
          className={`m-2 rounded-lg px-4 py-2 font-semibold text-white focus:outline-none focus:ring-1 focus:ring-primary`}
          placeholder={placeholder}
          {...props}
        />
      </div>
      {/*Right Element*/}
      {rightElement && <div>{rightElement}</div>}
    </div>
  )
}
