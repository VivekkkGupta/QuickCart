"use client"

import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

function SearchBar() {
    const handleSearch = (e)=>{
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSearch} className="mr-4 w-full max-w-sm items-center space-x-2 hidden md:flex">
            <Input type="text" placeholder="search product" />
            <Button type="submit" variant={"outline"} className={`cursor-pointer`} ><Search /></Button>
        </form>
    )
}

export default SearchBar
