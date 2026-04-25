import classNames from 'classnames';
import { forwardRef, type InputHTMLAttributes, memo } from 'react';
import s from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(({ className, type = 'text', ...rest }, ref) => {
    return <input ref={ref} type={type} className={classNames(s.input, className)} {...rest} />;
  }) 
);

Input.displayName = 'Input';
