import Link from 'next/link';
import React from 'react';
import { Globe } from 'lucide-react';

function TopHeader() {
    return (
        <div className='w-full bg-black text-white min-h-[48px] flex  items-center justify-center px-4 text-xs'>
            {/* Left side (empty space for alignment) */}
            {/* <div className='flex-1 hidden md:block'></div> */}

            {/* Center text with sale info (largest width) */}
            <div className='text-center text-[10px] text-xs md:text-sm flex-2'>
                Summer Sale For All Air Conditioners And Free Express Delivery - OFF 50%!
                <Link href="" className='underline ml-1 sm:ml-3'>
                    Shop Now
                </Link>
            </div>

            {/* Right side: Language selection */}
            {/* <div className='flex items-center justify-center gap-1 text-[10px] text-xs md:text-sm flex-1'>
                <Globe className='text-xs' />
                English
            </div> */}
        </div>
    );
}

export default TopHeader;
