"use client";
import PageSpace from "@/components/compounds/PageSpace";
import Navbar from "@/components/compounds/Navbar";
import clsx from "clsx";

interface HeaderProps {
    name?: string;
    isCategory?: boolean;
}

const Header = ({name, isCategory = false} : HeaderProps) => {
    return (
        <PageSpace className={clsx("bg-black w-full flex flex-col justify-start items-center gap-16", isCategory ? "h-[40vh]" : "h-[13vh]")}>
            <Navbar showLine={false}/>
            {isCategory && <h2 className="text-white">{name}</h2>}
        </PageSpace>
    );
};

export default Header;