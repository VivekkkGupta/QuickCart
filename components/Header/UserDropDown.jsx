'use client'

import React, { useState } from 'react'
import Link from "next/link"
import { ShoppingBag, User2Icon, LogOut, TruckIcon } from 'lucide-react'
import Image from 'next/image'
import { SignOutButton } from '@clerk/nextjs'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAppContext } from '@/contexts/AppContext'

const UserDropdown = ({ firstName, imageUrl }) => {
    const { routesObject } = useAppContext()
    const [loggingOut, setLoggingOut] = useState(false);

    if (loggingOut) {
        return (
            <div className="flex items-center justify-center w-40 h-40">
                <span className="animate-spin rounded-full border-4 border-orange-600 border-t-transparent h-8 w-8"></span>
                <span className="ml-3 text-orange-600 font-medium">Logging out...</span>
            </div>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {imageUrl ? (
                    <Image src={imageUrl} width={40} height={40} alt="User Profile" className="rounded-full cursor-pointer border-2" />
                ) : (
                    <User2Icon />
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{firstName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href={routesObject['orders'].path} className="flex gap-4 w-full">
                            <ShoppingBag />
                            <span>My Orders</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href={routesObject['address'].path} className="flex gap-4 w-full">
                            <TruckIcon />
                            <span>Address</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <SignOutButton
                        redirectUrl="/"
                        signOutCallback={() => setLoggingOut(true)}
                    >
                        <div className='flex gap-4 w-full items-center cursor-pointer '>
                            <LogOut />
                            <span>Log out</span>
                        </div>
                    </SignOutButton>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown