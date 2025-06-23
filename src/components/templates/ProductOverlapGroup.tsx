"use client";
import PageSpace from "@/components/compounds/PageSpace";
import ProductOverlap from "@/components/compounds/ProductOverlap";
import {useRouter} from "next/navigation";


const ProductOverlapGroup = () => {
    const router = useRouter();
    return (
        <PageSpace className={'bg-white py-40 flex flex-col md:flex-row lg:flex-row lg:items-center items-start justify-center gap-32 lg:gap-12 lg:min-h-[65vh] lg:h-[65vh]'}>
            <ProductOverlap name={'Headphones'} description={'Headphones image'} imgName={'image-category-thumbnail-headphones.png'} action={() => router.push('/category/headphones')}/>
            <ProductOverlap name={'Speakers'} description={'Speakers image'} imgName={'image-category-thumbnail-speakers.png'} action={() => router.push('/category/speakers')}/>
            <ProductOverlap name={'Earphones'} description={'Earphones image'} imgName={'image-category-thumbnail-earphones.png'} action={() => router.push('/category/earphones')}/>
        </PageSpace>
    );
};

export default ProductOverlapGroup;