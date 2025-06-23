import React from 'react';
import clsx from 'clsx';
import { transformImgPath } from '@/lib/util';

interface SnapShotProps {
    srcSet: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

const SnapShotGroup = ({ srcSet, alt, className, width = 300, height = 300 }: SnapShotProps) => {
    return (
        <picture>
            <source media="(min-width:1024px)" srcSet={`/images/${transformImgPath(srcSet?.desktop)}`} />
            <source media="(min-width:768px)" srcSet={`/images/${transformImgPath(srcSet?.tablet)}`} />
            <img
                src={`/images/${transformImgPath(srcSet?.mobile)}`}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                decoding="async"
                className={clsx('rounded-lg object-cover w-full h-auto', className)}
            />
        </picture>
    );
};

export default SnapShotGroup;
