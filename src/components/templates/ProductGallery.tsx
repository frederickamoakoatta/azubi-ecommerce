import React from 'react';
import Image from "next/image";
import {ProductType} from "@/types/product";
import {transformImgPath} from "@/lib/util";
import SnapShot from "@/components/atoms/SnapShot";

type ProductGalleryProps = Partial<Pick<ProductType, "gallery">>

const ProductGallery = ({gallery}: ProductGalleryProps) => {
    console.log(gallery);
    return (
        <div className="w-full flex flex-row justify-center items-center gap-5">
            <div className="w-[100vh] flex flex-col gap-5">
                <SnapShot src={gallery?.first.desktop} alt={'Gallery images'} className={'w-full'} width={300} height={300}/>
                <SnapShot src={gallery?.second.desktop} alt={'Gallery images'} className={'w-full'} width={300} height={300}/>
            </div>
            <SnapShot src={gallery?.third.desktop} alt={'Gallery images'} className={'w-full'} width={300} height={300}/>
        </div>
    );
};

export default ProductGallery;