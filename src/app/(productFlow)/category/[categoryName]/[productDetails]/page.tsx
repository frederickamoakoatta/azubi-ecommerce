"use client";
import PageSpace from "@/components/compounds/PageSpace";
import Header from "@/components/templates/Header";
import GoBack from "@/components/atoms/GoBack";
import ProductCategory from "@/components/compounds/ProductCategory";
import {useAppStore} from "@/store/appStore";
import AddToCart from "@/components/compounds/AddToCart";
import ProductFeature from "@/components/templates/ProductFeature";
import ProductGallery from "@/components/templates/ProductGallery";
import ProductRecommended from "@/components/templates/ProductRecommended";
import CartModal from "@/components/templates/CartModal";

const ProductDetails = () => {
    const {product, showCart} = useAppStore();

    return (
        <>
            <Header isCategory={false}/>
            <GoBack/>
            <PageSpace className="w-full relative flex flex-col justify-start items-start gap-30">
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
                <ProductFeature features={product?.features} includes={product?.includes}/>
                <ProductGallery gallery={product?.gallery}/>
                <ProductRecommended others={product?.others} category={product?.category}/>
            </PageSpace>
            { showCart && <CartModal/> }
        </>
    );
};

export default ProductDetails;