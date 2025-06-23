"use client";
import {useRouter} from "next/navigation";

const GoBack = () => {
    const router = useRouter();
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 pt-6 sm:pt-8 lg:pt-10">
            <span className="cursor-pointer opacity-50 hover:underline" onClick={() => router.back()}>
                Go back
            </span>
        </div>

    );
};

export default GoBack;