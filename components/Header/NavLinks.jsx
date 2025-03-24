import { useAppContext } from '@/contexts/AppContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


function NavLinks() {
    const { menuItems } = useAppContext()
    const pathname = usePathname();
    return (
        <nav className='text-sm hidden md:block'>
            <ul className='flex gap-10'>
                {
                    menuItems.map(({ name, path }, index) => (
                        <li key={index} className=''>
                            <Link
                                href={path}
                                className={`cursor-pointer pb-1 ${pathname === path ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}`}
                            >
                                {name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavLinks
