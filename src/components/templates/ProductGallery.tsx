import React from 'react';
import {ProductType} from "@/types/product";
import SnapShot from "@/components/atoms/SnapShot";
import SnapShotGroup from "@/components/atoms/SnapShotGroup";

type ProductGalleryProps = Partial<Pick<ProductType, "gallery">>

const ProductGallery = ({gallery}: ProductGalleryProps) => {
    console.log(gallery);
    return (
        <div className="w-full flex flex-col gap-5 lg:flex-row lg:gap-5">
            {/* First two stacked images */}
            <div className="w-full lg:w-[50%] flex flex-col gap-5">
                <SnapShotGroup
                    srcSet={{
                        mobile: gallery?.first.mobile ?? '',
                        tablet: gallery?.first.tablet ?? '',
                        desktop: gallery?.first.desktop ?? '',
                    }}
                    alt="Gallery Image 1"
                    className="w-full h-auto"
                    width={300}
                    height={300}
                />
                <SnapShotGroup
                    srcSet={{
                        mobile: gallery?.second.mobile ?? '',
                        tablet: gallery?.second.tablet ?? '',
                        desktop: gallery?.second.desktop ?? '',
                    }}
                    alt="Gallery Image 2"
                    className="w-full h-auto"
                    width={300}
                    height={300}
                />
            </div>

            {/* Large third image */}
            <div className="w-full lg:w-[50%]">
                <SnapShotGroup
                    srcSet={{
                        mobile: gallery?.third.mobile ?? '',
                        tablet: gallery?.third.tablet ?? '',
                        desktop: gallery?.third.desktop ?? '',
                    }}
                    alt="Gallery Image 3"
                    className="w-full h-full"
                    width={300}
                    height={300}
                />
            </div>
        </div>
    );
};

export default ProductGallery;