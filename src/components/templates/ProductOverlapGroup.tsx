"use client";
import PageSpace from "@/components/compounds/PageSpace";
import ProductOverlap from "@/components/compounds/ProductOverlap";
import {useRouter} from "next/navigation";


const ProductOverlapGroup = () => {
    const router = useRouter();
    return (
        <PageSpace className={'bg-white flex flex-row items-center justify-center gap-12 min-h-[65vh] h-[65vh]'}>
            <ProductOverlap name={'Headphones'} description={'Headphones image'} imgName={'image-category-thumbnail-headphones.png'} action={() => router.push('category/headphones')}/>
            <ProductOverlap name={'Speakers'} description={'Speakers image'} imgName={'image-category-thumbnail-speakers.png'} action={() => router.push('category/speakers')}/>
            <ProductOverlap name={'Earphones'} description={'Earphones image'} imgName={'image-category-thumbnail-earphones.png'} action={() => router.push('category/earphones')}/>
        </PageSpace>
    );
};

export default ProductOverlapGroup;