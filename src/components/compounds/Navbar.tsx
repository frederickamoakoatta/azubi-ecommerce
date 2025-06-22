import CartIcon from "@/components/atoms/CartIcon";
import AppLogo from "@/components/atoms/AppLogo";
import NavLink from "@/components/atoms/NavLink";

const Navbar = () => {
    return (
        <>
            <nav className="top-0 left-0 w-full h-16 bg-transparent">
                <div className="mx-auto">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <AppLogo/>

                        {/* Nav Items */}
                        <NavLink/>

                        <div className="flex-shrink-0">
                            <CartIcon count={0}/>
                        </div>
                    </div>
                </div>
            </nav>
            <hr className="bg-white h-[2px] opacity-20"/>
        </>
    );
}

export default Navbar;