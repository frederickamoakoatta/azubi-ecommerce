import ProductText, {ProductTextProps} from "@/components/compounds/ProductText";
import Image from "next/image";
import clsx from "clsx";
import {ProductType} from "@/types/product";
import {ReactNode} from "react";

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

            <Image
                src={`/images/${imgUrl?.split('./assets/', 9)[1]}`}
                alt="Logo"
                width={500}
                height={540}
                className="cursor-pointer"
            />
        </div>
    );
};

export default ProductCategory;