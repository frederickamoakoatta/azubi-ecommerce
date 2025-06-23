import React from 'react';
import Button from "@/components/atoms/Button";
import {useRouter} from "next/navigation";

const MediumBanner = () => {
    const router = useRouter();
    return (
        <div
            className="w-full rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/images/home/desktop/image-speaker-zx7.jpg')] md:bg-[url('/images/home/tablet/image-speaker-zx7.jpg')] sm:bg-[url('/images/home/mobile/image-speaker-zx7.jpg')] px-6 py-14 sm:py-20 md:px-12 lg:px-20 flex flex-col justify-center items-start gap-6">
            <h4 className="text-black text-2xl sm:text-3xl font-bold">ZX7 SPEAKER</h4>
            <Button className="w-auto" variant="outline" onClick={() =>router.push('/category/speakers')}>See Product</Button>
        </div>
    );
};

export default MediumBanner;