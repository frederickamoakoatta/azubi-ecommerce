"use client";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { FiChevronRight } from "react-icons/fi";

type ButtonVariant = 'primary' | 'outline' | 'link' | 'default';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
}

export const Button = ({
                           children,
                           variant = 'primary',
                           className,
                           ...props
                       }: ButtonProps) => {
    const base =
        'uppercase flex items-center cursor-pointer tracking-widest font-bold transition-colors duration-300 ' +
        'text-xs px-4 py-4 ' +
        'sm:text-sm sm:px-6 sm:py-3 ' +
        'md:text-sm md:px-8 md:py-4';

    const variants: Record<ButtonVariant, string> = {
        primary: 'bg-primary text-white hover:bg-primaryFade',
        outline: 'border border-black text-black hover:bg-black hover:text-white',
        link: 'text-black hover:text-primary',
        default: 'bg-black text-white hover:bg-secondary hover:text-primary',
    };

    return (
        <button className={clsx(base, variants[variant], className)} {...props}>
            {children}
            {variant === 'link' && (
                <FiChevronRight size={16} className="text-primary ml-2 sm:ml-3" />
            )}
        </button>
    );
};

export default Button;
