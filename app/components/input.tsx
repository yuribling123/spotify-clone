import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", disabled, ...props }, ref) => {
    return (
      <input
        className={twMerge(
          `flex w-full rounded-md bg-neutral-700 border px-3 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium`,
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        type={type}
        disabled={disabled}
        aria-disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);


export default Input;
