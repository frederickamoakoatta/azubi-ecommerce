"use client";
import {useRouter} from "next/navigation";

const GoBack = () => {
    const router = useRouter();
    return (
        <div className="px-40 pt-10">
            <span className="cursor-pointer opacity-50 hover:underline"
                          onClick={() => router.back()}>Go back</span>
        </div>
    );
};

export default GoBack;