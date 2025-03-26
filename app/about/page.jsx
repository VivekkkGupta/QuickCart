import PromotionCard from '@/components/PromotionCard/PromotionCard'
import { CircleDollarSign, Headset, IndianRupee, ShieldCheck, ShieldCheckIcon, ShoppingBag, Store, Truck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const promotionData = [
    {
        logo: <Store size={40} />, // Adjusted size for better visibility
        value: "10.5k",
        description: "Sellers active in our Site"
    },
    {
        logo: <IndianRupee size={40} />,
        value: "33k",
        description: "Monthly Product Sale"
    },
    {
        logo: <ShoppingBag size={40} />,
        value: "45.5k",
        description: "Customer active in our site",
    },
    {
        logo: <CircleDollarSign size={40} />,
        value: "25k",
        description: "Annual gross sale in our site ",
    },
]

const promotionData2 = [
    {
        logo: <Truck size={40} />,
        value: "Fast and fast delivery",
        description: "Free delivery for all orders over $140",
    },
    {
        logo: <Headset size={40} />,
        value: "24/7 customer service",
        description: "Friendly 24/7 customer support",
    },
    {
        logo: <ShieldCheckIcon size={40} />,
        value: "Money back guarantee",
        description: "We return money within 30 days",
    },
]

function Page() {
    return (
        <div className="max-w-[1240px] mx-auto flex flex-col gap-10 py-10">
            <div className='flex flex-col lg:flex-row w-full gap-5'>
                <div className='flex flex-col items-start justify-center gap-5 w-full'>
                    <h1 className='tracking-wider text-4xl font-bold mb-5'>Our Story</h1>
                    <p>Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.</p>
                    <p>
                        Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.
                    </p>
                </div>
                <div className='flex items-center justify-center w-full'>
                    <Image src="/aboutImages/about.png" alt='about-page-image' width={500} height={500} />
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 w-full'>
                {
                    promotionData.map((promotion, index) => (
                        <div key={index} className='flex flex-col items-center justify-center gap-2 border w-full p-5 shadow-md rounded-lg bg-white text-center h-40'>
                            <div className='text-blue-500'>{promotion.logo}</div>
                            <h2 className='text-xl font-bold'>{promotion.value}</h2>
                            <p className='text-gray-600 text-sm'>{promotion.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-full'>
                {
                    promotionData2.map((promotion, index) => (
                        <div key={index} className='flex flex-col items-center justify-center gap-2 border w-full p-5 shadow-md rounded-lg bg-white text-center h-40'>
                            <div className='text-white bg-black p-2 rounded-full border-8 border-muted-800 shadow-2xl'>{promotion.logo}</div>
                            <h2 className='text-xl font-bold uppercase'>{promotion.value}</h2>
                            <p className='text-gray-600 text-sm'>{promotion.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Page;