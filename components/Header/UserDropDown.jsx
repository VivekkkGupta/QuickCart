'use client'

import React from 'react'
import Link from "next/link"
import { ShoppingBag, Star, User2Icon, LogOut, User } from 'lucide-react'
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
                        <Link href={routesObject['profile'].path} className="flex gap-4 w-full">
                            <User />
                            <span>Profile</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href={routesObject['orders'].path} className="flex gap-4 w-full">
                            <ShoppingBag />
                            <span>My Orders</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href={routesObject['myreview'].path} className="flex gap-4 w-full">
                            <Star />
                            <span>My Reviews</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <SignOutButton redirectUrl={routesObject['home'].path}>
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
