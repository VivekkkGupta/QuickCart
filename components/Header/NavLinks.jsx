"use client"; // Convert to a client component

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Category", path: "/category" }
];

export default function NavLinks() {
    const pathname = usePathname(); // Get current path dynamically

    return (
        <nav className="text-sm hidden md:block">
            <ul className="flex gap-10">
                {menuItems.map(({ name, path }) => (
                    <li key={path}>
                        <Link
                            href={path}
                            className={`text-gray-900 cursor-pointer pb-1 ${
                                pathname === path ? "border-b-2 border-gray-800" : ""
                            }`}
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
