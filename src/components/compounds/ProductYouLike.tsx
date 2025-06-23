"use client";
import Button from "@/components/atoms/Button";
import SnapShot from "@/components/atoms/SnapShot";
import {RelatedProduct} from "@/types/product";
import {useRouter} from "next/navigation";

interface ProductsYouLikeProps {
    relatedProduct: RelatedProduct;
    category?: string;
}

const ProductYouLike = ({relatedProduct, category} : ProductsYouLikeProps) => {
    const router = useRouter();

    return (
        <div className="w-full flex flex-col justify-center items-center gap-5">
            <SnapShot className="w-full" src={relatedProduct.image.desktop} width={300} height={300} alt={'products you may like'}/>
            <h5>{relatedProduct.name}</h5>
            <Button variant={'primary'} onClick={() => router.push(`/category/${category}/${relatedProduct.slug}`)}>
                See Product
            </Button>
        </div>
    );
};

export default ProductYouLike;