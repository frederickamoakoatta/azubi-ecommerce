import React from 'react';
import PageSpace from "@/components/compounds/PageSpace";
import Image from "next/image";
import AppLogo from "@/components/atoms/AppLogo";
import NavLink from "@/components/atoms/NavLink";

const Footer = () => {
    return (
        <PageSpace className="w-full relative bg-secondary px-6 py-10 lg:py-16">
            <hr className="absolute top-0 w-[120px] h-[6px] bg-primary" />

            <div className="flex flex-col-reverse gap-10 lg:flex-row lg:justify-between lg:items-start">
                {/* Left Column */}
                <div className="flex flex-col justify-start items-start gap-10 w-full lg:w-1/2">
                    <div className="flex flex-col justify-start items-start gap-5">
                        <AppLogo />
                        <p className="text-white opacity-50 max-w-md">
                            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
                            specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
                            facility - we’re open 7 days a week.
                        </p>
                    </div>
                    <p className="text-white opacity-50 text-sm">
                        Copyright 2021. All Rights Reserved.
                    </p>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-between items-start gap-6 w-full lg:w-auto">
                    <NavLink />
                    <div className="flex flex-row items-center gap-5">
                        <Image src="/images/shared/desktop/icon-facebook.svg" alt="Facebook Logo" width={20} height={20} />
                        <Image src="/images/shared/desktop/icon-twitter.svg" alt="Twitter Logo" width={20} height={20} />
                        <Image src="/images/shared/desktop/icon-instagram.svg" alt="Instagram Logo" width={20} height={20} />
                    </div>
                </div>
            </div>
        </PageSpace>

    );
};

export default Footer;