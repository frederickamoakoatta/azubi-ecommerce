"use client";
import {ReactNode} from 'react';
import clsx from "clsx";

interface ProductTextProps {
    mode: 'light' | 'dark',
    children: ReactNode,
    hasSubTitle: boolean;
    subTitle?: string;
    title: string;
    description: string;
    className?: string
}

const ProductText = ({mode, title, subTitle, hasSubTitle, description, children, className}: ProductTextProps) => {
    return (
        <div className={clsx("flex flex-col items-start justify-center gap-6 text-black", className)}>
            {hasSubTitle && <span className={clsx("txt-overline text-white opacity-40", mode === "light" && "text-black")}>{subTitle}</span>}
            <h1 className={clsx("text-white", mode === "light" && "text-black")}>{title}</h1>
            <p className={clsx("text-white", mode === "light" && "text-black")}>{description}</p>
            {children}
        </div>
    );
};

export default ProductText;