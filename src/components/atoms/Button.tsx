"use client";
import clsx from "clsx";
import {ButtonHTMLAttributes} from "react";
import {FiChevronRight} from "react-icons/fi";

type ButtonVariant = 'primary' | 'outline' | 'link' | 'default';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
}

export const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
    const base = 'uppercase flex items-center cursor-pointer tracking-widest text-sm font-bold px-8 py-4 transition-colors duration-300';

    const variants: Record<ButtonVariant, string> = {
        primary: 'bg-primary text-white hover:bg-primaryFade',
        outline: 'border border-black text-black hover:bg-black hover:text-white',
        link: 'text-black hover:text-primary',
        default: 'bg-black text-white hover:bg-secondary hover:text-primary',
    };

    return (
        <button className={clsx(base, variants[variant], className)} {...props}>
            {children}
            {variant === 'link' && <FiChevronRight size={16} className={'text-primary mx-3'} />}
        </button>
    );
};

export default Button;
