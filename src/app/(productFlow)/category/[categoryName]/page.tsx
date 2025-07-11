'use client';
import Header from "@/components/templates/Header";
import {getProductByCategory} from "@/lib/getProducts";
import ProductCategory from "@/components/compounds/ProductCategory";
import {ProductType} from "@/types/product";
import PageSpace from "@/components/compounds/PageSpace";
import {useParams, useRouter} from "next/navigation";
import Button from "@/components/atoms/Button";
import {useAppStore} from "@/store/appStore";
import CartModal from "@/components/templates/CartModal";

const Category = () => {
    const params = useParams();
    const products = getProductByCategory(params.categoryName as string);
    const { setProduct, showCart } = useAppStore();
    const router = useRouter();

    const moveToDetailsPage = (product : ProductType) => {
        setProduct(product);
        router.push(`/category/${product?.category}/${product?.slug}`);
    }

    return (
        <>
            <Header name={params.categoryName as string} isCategory/>
            <PageSpace className="w-full flex flex-col justify-center items-center gap-30 my-20">
                {products.map((product: ProductType, index: number) => (
                    <ProductCategory
                        key={product.id}
                        imgPosition={index % 2 === 0 ? 'left' : 'right'}
                        imgUrl={product.categoryImage.desktop}
                        className={'w-[60vh]'}
                        title={product.name}
                        hasSubTitle={product.new}
                        subTitle={'New Product'}
                        description={product.description}
                        product={product}
                        categoryProductChildren={
                        <Button title={'product button'} variant={'primary'} onClick={() => moveToDetailsPage(product)}>See Product</Button>
                    }
                    />
                ))}
            </PageSpace>
            { showCart && <CartModal/> }
        </>
    );
};

export default Category;