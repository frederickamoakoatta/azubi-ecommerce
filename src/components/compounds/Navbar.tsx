import CartIcon from "@/components/atoms/CartIcon";
import AppLogo from "@/components/atoms/AppLogo";
import NavLink from "@/components/atoms/NavLink";
import {TiThMenu} from "react-icons/ti";

interface NavbarProps {
    showLine? : boolean;
}

const Navbar = ({showLine = true} : NavbarProps) => {
    return (
        <>
            <nav className="top-0 left-0 w-full h-16 bg-transparent ">
                <div className="mx-auto">
                    <div className="flex items-center justify-between">
                        <TiThMenu className="flex text-white lg:hidden" size={26}/>

                        <AppLogo/>

                        <NavLink/>

                        <div className="flex-shrink-0">
                            <CartIcon/>
                        </div>
                    </div>
                </div>
            </nav>
            {showLine && <hr className="bg-white h-[2px] opacity-20"/>}
        </>
    );
}

export default Navbar;