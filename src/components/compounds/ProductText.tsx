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
        <div className={clsx("flex flex-col items-center justify-center lg:items-start gap-6 text-black", className)}>
            {hasSubTitle && <span className={clsx("txt-overline", mode === "light" ? "text-primary" : "text-white opacity-40")}>{subTitle}</span>}
            {
                hasProduct ?
                    <>
                        <h2 className={clsx("hidden text-center lg:text-left lg:block md:block", mode === "light" ? "text-black" : "text-white")}>{title}</h2>
                        <h3 className={clsx("block text-center lg:hidden md:hidden", mode === "light" ? "text-black" : "text-white")}>{title}</h3>
                    </>
                    :
                    <>
                        <h1 className={clsx("hidden text-center lg:text-left lg:block md:block", mode === "light" ? "text-black" : "text-white")}>{title}</h1>
                        <h3 className={clsx("text-center lg:text-left lg:hidden md:hidden", mode === "light" ? "text-black" : "text-white")}>{title}</h3>
                    </>

            }
            <p className={clsx("w-[30vh] lg:w-[50vh] opacity-50 text-center lg:text-left", mode === "light" ? "text-black" : "text-white")}>{description}</p>
            {children}
        </div>
    );
};

export default ProductText;