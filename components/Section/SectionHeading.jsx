import React from 'react'
import { Button } from '../ui/button'

function SectionHeading({ tagheading = "Today's", heading = "Best Selling Product" }) {
    return (
        <div className="flex flex-col">
            <div className="flex text-pink-700 font-bold">
                <span className="bg-pink-600 rounded-sm h-6 w-3"></span>
                <span className='ml-4 capitalize'>{tagheading}</span>
            </div>
            <div className='flex items-center justify-between'>
                <h2 className='my-4 mb-4 font-extrabold tracking-wide text-900 text-3xl capitalize'>
                    {heading}
                </h2>
                <Button className={`capitalize px-8 cursor-pointer`}>
                    View All
                </Button>
            </div>
        </div>
    )
}

export default SectionHeading
