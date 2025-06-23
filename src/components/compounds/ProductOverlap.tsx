import React from 'react';
import Button from "@/components/atoms/Button";
import Image from "next/image";

interface ProductOverlapProps {
    name: string,
    description : string,
    imgName: string,
    imgWidth?: number,
    imgHeight?: number,
    action?: () => void,
}

const ProductOverlap = ({name, description, imgName, imgWidth = 180, imgHeight = 180, action} : ProductOverlapProps) => {
    return (
        <div className="w-full h-[25vh] lg:h-[180px] relative flex flex-col justify-end items-center gap-2 px-4 py-4 rounded-xl bg-accent">
            <Image className="absolute -top-18" src={`/images/shared/desktop/${imgName}`} alt={description} width={imgWidth} height={imgHeight}/>
            <h6>{name}</h6>
            <Button variant={'link'} onClick={action}>
                Shop
            </Button>
        </div>
    );
};

export default ProductOverlap;