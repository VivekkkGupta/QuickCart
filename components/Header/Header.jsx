import Link from "next/link";
import { ShoppingCart, HeartIcon } from "lucide-react";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import LogoSection from "./LogoSection";
import UserAccountButton from "./UserAccountButton";
import HeaderLoader from "./HeaderLoader";
import CartIconButton from "./CartIconButton";

function Header() {
    return (
        <header className="top-0 z-50 w-full border-b bg-white sticky">
            <div className="relative w-full h-15 flex items-center justify-between overflow-hidden py-2 px-4 border-b max-w-[1240px] mx-auto">
                <LogoSection />
                <NavLinks /> {/* No need to pass pathname */}
                <div className="h-full flex items-center gap-4">
                    <SearchBar />
                    <Link href={"/wishlist"}>
                        <HeartIcon />
                    </Link>
                    <CartIconButton/>
                    <UserAccountButton />
                </div>
            </div>
            {/* <HeaderLoader /> */}
        </header>
    );
}

export default Header;
