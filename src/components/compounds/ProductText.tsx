"use client";
import {ReactNode} from 'react';
import clsx from "clsx";

export interface ProductTextProps {
    mode?: 'light' | 'dark',
    children?: ReactNode,
    hasSubTitle?: boolean;
    subTitle: string;
    title?: string;
    description?: string;
    className: string
    hasProduct?: boolean;
}

const ProductText = ({mode, title, subTitle, hasSubTitle, description, children, className, hasProduct = false}: ProductTextProps) => {
    return (
        <div className={clsx("flex flex-col items-start justify-center gap-6 text-black", className)}>
            {hasSubTitle && <span className={clsx("txt-overline", mode === "light" ? "text-primary" : "text-white opacity-40")}>{subTitle}</span>}
            {
                hasProduct ?
                    <h2 className={mode === "light" ? "text-black" : "text-white"}>{title}</h2> :
                    <h1 className={mode === "light" ? "text-black" : "text-white"}>{title}</h1>
            }
            <p className={clsx("opacity-50", mode === "light" ? "text-black" : "text-white")}>{description}</p>
            {children}
        </div>
    );
};

export default ProductText;