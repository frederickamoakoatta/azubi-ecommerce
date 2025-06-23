import ProductText, {ProductTextProps} from "@/components/compounds/ProductText";
import Image from "next/image";
import clsx from "clsx";
import {ProductType} from "@/types/product";
import {ReactNode} from "react";
import {transformImgPath} from "@/lib/util";
import SnapShot from "@/components/atoms/SnapShot";

interface ProductCategoryProps extends ProductTextProps{
    imgPosition: 'left' | 'right';
    imgUrl?: string;
    product: ProductType | null;
    categoryProductChildren: ReactNode;
}

const ProductCategory = ({imgPosition, imgUrl, className, title, hasSubTitle, subTitle, description, categoryProductChildren}: ProductCategoryProps) => {
    return (
        <div className={clsx("w-full flex flex-row justify-between items-center gap-30", imgPosition === 'left' && "flex-row-reverse")}>
            <ProductText className={className} mode={'light'} title={title} hasSubTitle={hasSubTitle} subTitle={subTitle} hasProduct description={description}>
                {categoryProductChildren}
            </ProductText>

            <SnapShot className={"cursor-pointer"} src={imgUrl} alt={'product images'} width={500} height={540}/>
        </div>
    );
};

export default ProductCategory;