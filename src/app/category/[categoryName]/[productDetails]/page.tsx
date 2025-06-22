"use client";
import PageSpace from "@/components/compounds/PageSpace";
import Header from "@/components/templates/Header";
import GoBack from "@/components/atoms/GoBack";
import ProductCategory from "@/components/compounds/ProductCategory";
import {useAppStore} from "@/store/appStore";
import AddToCart from "@/components/compounds/AddToCart";

const ProductDetails = () => {
    const {product} = useAppStore();
    return (
        <>
            <Header isCategory={false}/>
            <PageSpace className="flex flex-col justify-start items-start gap-10">
               <GoBack/>
                <ProductCategory
                    imgPosition={'left'}
                    imgUrl={product?.image.desktop}
                    product={product}
                    hasSubTitle={product?.new}
                    subTitle={'New Product'}
                    title={product?.name}
                    description={product?.description}
                    className={''}
                    categoryProductChildren={<AddToCart/>}
                />
            </PageSpace>
        </>
    );
};

export default ProductDetails;