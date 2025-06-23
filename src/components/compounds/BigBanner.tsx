import React from 'react';
import Image from "next/image";
import ProductText from "@/components/compounds/ProductText";
import Button from "@/components/atoms/Button";

const BigBanner = () => {
    return (
        <div className="w-full h-[450px] rounded-lg relative overflow-hidden bg-primary flex flex-row justify-start items-center px-10">
            <Image className="mt-50 -mx-30" src={'/images/home/desktop/pattern-circles.svg'} alt={'background circles'} width={850} height={850}/>
            <Image className="absolute z-10 top-18 left-44" src={'/images/home/desktop/image-speaker-zx9.png'} alt={'Speaker image'} width={320} height={600}/>
            <div className="w-full flex flex-row justify-end items-center px-15">
                <ProductText
                    className="absolute z-100 w-[25vw]"
                    mode={'dark'}
                    hasSubTitle={false}
                    title={'ZX9 SPEAKER'}
                    description={'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'}
                    subTitle={''}>
                    <Button variant={'default'}>See Product</Button>
                </ProductText>
            </div>
        </div>
    );
};

export default BigBanner;