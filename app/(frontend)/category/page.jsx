'use client'

import SectionHeading from "@/components/Section/SectionHeading";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { CameraIcon, Computer, Gamepad, Headset, Phone, Smartphone } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";


function page() {

    const [categories, setCategories] = useState([])
    const fetchCategories = async () => {
        try {
            const { data, status } = await axios.get('/api/category')
            // if (status !== 200) {
            //     toast.error("Error fetching categories")
            //     return
            // }
            setCategories(data.categories)
        } catch (error) {
            toast.error("Error fetching categories")
            console.log("Frontend Error: ", error)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div className="flex max-w-[1240px] mx-auto w-full  flex-col gap-5 py-20">
            <div className="flex flex-col w-full">

                <SectionHeading tagheading="category" heading="" />
                <div className="flex items-center justify-between">
                    <h2 className="my-4 mb-4 font-extrabold tracking-wide text-900 text-3xl capitalize">
                        All Categories
                    </h2>
                    {/* <Button className={`capitalize px-8 cursor-pointer`}>View All</Button> */}
                </div>
            </div>
            <div className="grid grid-cols-2  place-items-center md:grid-cols-3 lg:grid-cols-6 gap-4">
                {
                    categories.map((category) => (
                        <div key={category.id}
                            className="w-full  max-w-[200px] flex flex-col items-center justify-center gap-2 p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 cursor-pointer"
                            onClick={() => console.log(category.name)}
                        >
                            <div className="flex items-center justify-center bg-gray-200 rounded-full p-3">
                                {category.emoji || "📦"}
                            </div>
                            <span className="text-lg font-semibold capitalize">{category.name}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default page;
