"use client";
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const navItems = [
    {name: "Home", href: "/"},
    {name: "Headphones", href: "/shop"},
    {name: "Speakers", href: "/about"},
    {name: "Earphones", href: "/contact"},
];

const NavLink = () => {
    const pathname = usePathname();
    return (
        <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`navLink text-white uppercase tracking-wide hover:text-primary transition-colors ${
                        pathname === item.href ? "text-primary" : ""
                    }`}>
                    {item.name}
                </Link>
            ))}
        </div>
    );
};

export default NavLink;