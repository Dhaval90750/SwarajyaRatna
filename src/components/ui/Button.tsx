import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-sans font-bold transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-orange-600 focus:ring-primary',
      secondary: 'bg-secondary text-white hover:bg-stone-800 focus:ring-secondary',
      outline: 'border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary',
      ghost: 'hover:bg-primary/10 text-primary focus:ring-primary',
    };
    
    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-8 text-base shadow-md hover:shadow-lg',
      lg: 'h-14 px-10 text-lg shadow-md hover:shadow-lg transition-shadow',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
export { Button };
