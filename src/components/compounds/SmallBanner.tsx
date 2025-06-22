import React from 'react';
import Button from "@/components/atoms/Button";

const SmallBanner = () => {
    return (
        <div className="w-full flex flex-row justify-center items-center gap-10">
            <div className="w-full h-[280px] bg-[url(/images/home/desktop/image-earphones-yx1.jpg)] bg-cover bg-center bg-no-repeat"/>
            <div className="w-full h-[280px] bg-accent rounded-lg flex flex-col justify-center items-center gap-5">
                <h4>ZX7 SPEAKER</h4>
                <Button variant={'outline'}>See Product</Button>
            </div>
        </div>
    );
};

export default SmallBanner;