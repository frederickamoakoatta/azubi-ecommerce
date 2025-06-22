import React from 'react';
import Button from "@/components/atoms/Button";

const MediumBanner = () => {
    return (
        <div className="w-full h-[280px] rounded-lg flex flex-col justify-center items-start gap-5 px-20 bg-[url(/images/home/desktop/image-speaker-zx7.jpg)] bg-cover bg-center bg-no-repeat">
            <h4>ZX7 SPEAKER</h4>
            <Button variant={'outline'}>See Product</Button>
        </div>
    );
};

export default MediumBanner;