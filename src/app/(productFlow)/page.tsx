"use client";
import Intro from "@/components/templates/Intro";
import ProductOverlapGroup from "@/components/templates/ProductOverlapGroup";
import BannerGroup from "@/components/templates/BannerGroup";
import {useAppStore} from "@/store/appStore";
import CartModal from "@/components/templates/CartModal";

export default function Home() {
    const {showCart} = useAppStore();
    return (
        <>
            <Intro/>
            <ProductOverlapGroup/>
            <BannerGroup/>
            { showCart && <CartModal/> }
        </>
    );
}
