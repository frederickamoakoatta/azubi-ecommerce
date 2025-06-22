import PageSpace from "@/components/compounds/PageSpace";
import ProductOverlap from "@/components/compounds/ProductOverlap";

const ProductOverlapGroup = () => {
    return (
        <PageSpace className={'bg-white flex flex-row items-center justify-center gap-12 min-h-[65vh] h-[65vh]'}>
            <ProductOverlap name={'Headphones'} description={'Headphones image'} imgName={'image-category-thumbnail-headphones.png'}/>
            <ProductOverlap name={'Speakers'} description={'Speakers image'} imgName={'image-category-thumbnail-speakers.png'}/>
            <ProductOverlap name={'Earphones'} description={'Earphones image'} imgName={'image-category-thumbnail-earphones.png'}/>
        </PageSpace>
    );
};

export default ProductOverlapGroup;