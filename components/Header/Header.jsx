'use client'

import React from 'react'
import Link from "next/link"
import { Search, ShoppingCart, User2Icon } from 'lucide-react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import ModeToggle from './mode-toggle'


function Header() {

  return (
    <header className="w-full h-15 bg-slate-800 text-white flex items-center justify-between overflow-hidden px-6 py-2 border-b">

      <div>
        <Link href="/">
          <Image src="images/logos/logo.svg" alt="logo" width={30} height={30} />
        </Link>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="search product" />
        <Button type="submit" className={`cursor-pointer`} ><Search /></Button>
      </form>

      <nav className=" h-full flex items-center gap-4">
        {/* <ModeToggle /> */}
        <Link href="/cart">
          <Button className={`h-10 w-10 cursor-pointer`}>
            <ShoppingCart />
          </Button>
        </Link>
        <Link href="/profile">
          <Button className={`h-10 w-10 cursor-pointer`} variant={""}>
            <User2Icon />
          </Button>
        </Link>
      </nav>
    </header >
  )
}

export default Header