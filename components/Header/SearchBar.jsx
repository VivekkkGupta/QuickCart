import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

function SearchBar() {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="search product" />
            <Button type="submit" variant={""} className={`cursor-pointer`} ><Search /></Button>
        </form>
    )
}

export default SearchBar
