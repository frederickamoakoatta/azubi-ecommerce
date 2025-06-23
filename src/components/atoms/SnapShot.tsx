import React from 'react';
import Image from "next/image";
import {transformImgPath} from "@/lib/util";
import clsx from "clsx";

interface ImageProps {
    src?: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
}

const SnapShot = ({width, height, alt, src, className}: ImageProps) => {
    return (
        <Image className={clsx("rounded-lg", className)} src={`/images/${transformImgPath(src)}`}
               alt={alt} width={width} height={height}/>
    );
};

export default SnapShot;