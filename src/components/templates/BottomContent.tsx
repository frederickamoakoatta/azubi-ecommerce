import React from 'react';
import PageSpace from "@/components/compounds/PageSpace";
import Image from "next/image";

const BottomContent = () => {
    return (
        <PageSpace className="w-full bg-white flex flex-row items-center justify-between">
            <div className="w-[55vh] flex flex-col justify-center items-center gap-5">
                <h2>Bringing you the <span className="text-primary">best</span> audio gear</h2>
                <p className="opacity-50">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
                    available for you to browse and experience a wide range of our products. Stop by our store to meet
                    some of the fantastic people who make Audiophile the best place to buy your portable audio
                    equipment.
                </p>
            </div>
            <Image src={'/images/shared/desktop/image-best-gear.jpg'} alt={'Bottom content image'} width={300} height={300} className={'w-[62vh] min-h-[65vh] h-[65vh]  rounded-lg'}/>
        </PageSpace>
    );
};

export default BottomContent;