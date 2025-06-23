"use client";
import React from 'react';
import ProductText from "@/components/compounds/ProductText";
import Button from "@/components/atoms/Button";
import Navbar from "@/components/compounds/Navbar";
import PageSpace from "@/components/compounds/PageSpace";
import {useRouter} from "next/navigation";

const Intro = () => {
    const router = useRouter();
    return (
        <PageSpace className={"bg-cover bg-center bg-no-repeat min-h-[90vh] h-[100vh] bg-[url(/images/home/tablet/image-hero.jpg)] lg:bg-[url(/images/home/desktop/image-hero.jpg)] lg:h-[90vh]"}>
            <Navbar/>
            <div className="w-full h-[80vh] flex flex-row justify-center items-center lg:justify-start">
                <ProductText className={'w-[60vw] lg:w-[30vw]'} mode={'dark'} subTitle={'New Product'} hasSubTitle
                             title={'XX99 Mark II Headphones'}
                             description={'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'}>
                    <Button variant={'primary'} onClick={() => router.push('category/headphones')}>See Product</Button>
                </ProductText>
            </div>
        </PageSpace>

    );
};

export default Intro;