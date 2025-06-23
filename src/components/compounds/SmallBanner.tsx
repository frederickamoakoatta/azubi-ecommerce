import React from 'react';
import Button from "@/components/atoms/Button";
import {useRouter} from "next/navigation";

const SmallBanner = () => {
    const router = useRouter();
    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
            <div className="w-full h-[200px] md:h-[280px] bg-[url('/images/home/desktop/image-earphones-yx1.jpg')] bg-cover bg-center bg-no-repeat rounded-lg"/>
            <div className="w-full h-[200px] md:h-[280px] bg-accent rounded-lg flex flex-col justify-center items-center gap-4 px-6 text-center">
                <h4 className="text-black text-lg font-semibold tracking-wide">ZX7 SPEAKER</h4>
                <Button variant="outline" onClick={() =>router.push('/category/earphones')}>See Product</Button>
            </div>
        </div>

    );
};

export default SmallBanner;