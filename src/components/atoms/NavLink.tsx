"use client";
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";

const navItems = [
    {name: "Home", href: "/"},
    {name: "Headphones", href: "/category/headphones"},
    {name: "Speakers", href: "/category/speakers"},
    {name: "Earphones", href: "/category/earphones"},
];

const NavLink = () => {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(`navLink uppercase tracking-wide hover:text-primary transition-colors`,
                        item.href !== "/" && pathname.startsWith(item.href) ? "text-primary" : "text-white")}>
                    {item.name}
                </Link>
            ))}
        </div>
    );
};

export default NavLink;