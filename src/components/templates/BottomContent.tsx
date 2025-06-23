import React from 'react';
import PageSpace from "@/components/compounds/PageSpace";
import Image from "next/image";

const BottomContent = () => {
    return (
        <PageSpace className="w-full bg-white flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
            <div
                className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left px-6 md:px-12 gap-6">
                <h2 className="hidden lg:block text-2xl md:text-3xl lg:text-4xl font-bold">
                    Bringing you the <span className="text-primary">best</span> audio gear
                </h2>

                <h3 className="block lg:hidden text-2xl md:text-3xl lg:text-4xl font-bold">
                    Bringing you the <span className="text-primary">best</span> audio gear
                </h3>
                <p className="opacity-50 text-base md:text-lg">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
                    available for you to browse and experience a wide range of our products. Stop by our store to meet
                    some of the fantastic people who make Audiophile the best place to buy your portable audio
                    equipment.
                </p>
            </div>

            <div className="w-full lg:w-1/2">
                <picture>
                    <source srcSet="/images/shared/desktop/image-best-gear.jpg" media="(min-width: 1024px)" />
                    <source srcSet="/images/shared/tablet/image-best-gear.jpg" media="(min-width: 768px)" />
                    <img
                        src="/images/shared/mobile/image-best-gear.jpg"
                        alt="Bottom content image"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </picture>
            </div>
        </PageSpace>

    );
};

export default BottomContent;