"use client";
import Button from "@/components/atoms/Button";
import ProductText from "@/components/compounds/ProductText";
import Image from "next/image";
import clsx from "clsx";

interface ProductCategoryProps {
    imgPosition: 'left' | 'right';
}

const ProductCategory = ({imgPosition}: ProductCategoryProps) => {
    return (
        <div className={clsx("flex flex-row justify-between items-center", imgPosition === 'left' && "flex-row-reverse")}>
            <ProductText mode={'light'} title={'Home'} hasSubTitle={true} subTitle={'NEW PRODUCT'} description={'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'}>
                <Button title={'product button'} variant={'primary'} onClick={()=>{}}>See Product</Button>
            </ProductText>

            <Image
                src="/images/home/desktop/image-speaker-zx9.png"
                alt="Logo"
                width={540}
                height={560}
                className="cursor-pointer"
            />
        </div>
    );
};

export default ProductCategory;