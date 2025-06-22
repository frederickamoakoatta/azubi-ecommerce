"use client";
import React from 'react';
import ProductText from "@/components/compounds/ProductText";
import Button from "@/components/atoms/Button";
import Navbar from "@/components/compounds/Navbar";
import PageSpace from "@/components/compounds/PageSpace";

const Intro = () => {
    return (
        <PageSpace className={"bg-[url(/images/home/desktop/image-hero.jpg)] bg-cover bg-center min-h-[90vh] h-[90vh]"}>
            <Navbar/>
            <div className="w-full h-[80vh] flex flex-row justify-start">
                <ProductText className={'w-[30vw]'} mode={'dark'} subTitle={'New Product'} hasSubTitle
                             title={'XX99 Mark II\n' + 'Headphones'}
                             description={'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'}>
                    <Button variant={'primary'} onClick={() => {
                    }}>See Product</Button>
                </ProductText>
            </div>
        </PageSpace>

    );
};

export default Intro;