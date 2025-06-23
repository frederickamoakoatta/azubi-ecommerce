import React from 'react';
import Image from "next/image";
import ProductText from "@/components/compounds/ProductText";
import Button from "@/components/atoms/Button";
import {useRouter} from "next/navigation";

const BigBanner = () => {
    const router = useRouter();
    return (
        <div
            className="w-full rounded-lg relative overflow-hidden bg-primary px-6 py-10 flex flex-col-reverse items-center justify-center md:flex-col md:py-20 lg:flex-row lg:justify-start lg:px-10 lg:py-0 lg:h-[450px]">
            <Image
                className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 w-[600px] md:w-[700px] lg:w-[850px]"
                src={'/images/home/desktop/pattern-circles.svg'}
                alt={'background circles'}
                width={850}
                height={850}
            />

            <div className="z-10 text-center lg:text-left w-full max-w-md md:max-w-xl lg:w-[25vw] lg:ml-auto">
                <ProductText
                    className=""
                    mode="dark"
                    hasSubTitle={false}
                    title="ZX9 SPEAKER"
                    description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
                    subTitle=""
                >
                    <div className="mt-6">
                        <Button variant="default" onClick={() =>router.push('/category/speakers')}>See Product</Button>
                    </div>
                </ProductText>
            </div>

            <div className="z-10 mb-10 lg:absolute lg:top-1/2 lg:left-44 lg:transform lg:-translate-y-1/2">
                <Image
                    src={'/images/home/desktop/image-speaker-zx9.png'}
                    alt={'Speaker image'}
                    width={320}
                    height={600}
                    className="w-[170px] md:w-[240px] lg:w-[320px]"
                />
            </div>
        </div>
    );
};

export default BigBanner;