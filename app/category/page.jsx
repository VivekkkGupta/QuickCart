'use client'

import { Button } from "@/components/ui/button";
import { CameraIcon, Computer, Gamepad, Headset, Phone, Smartphone } from "lucide-react";
import React from "react";

const categories = [
    {
        categoryId: 1,
        name: "Phones",
        icon: <Phone/>,
    },
    {
        categoryId: 2,
        name: "Computers",
        icon: <Computer/>,
    },
    {
        categoryId: 3,
        name: "SmartWatch",
        icon: <Smartphone/>,
    },
    {
        categoryId: 4,
        name: "Camera",
        icon: <CameraIcon/>,
    },
    {
        categoryId: 5,
        name: "HeadPhones",
        icon: <Headset/>,
    },
    {
        categoryId: 6,
        name: "Gaming",
        icon: <Gamepad/>,
    },
]

function page() {
  return (
    <div className="flex max-w-[1240px] mx-auto w-full  flex-col gap-5 py-20">
      <div className="flex flex-col w-full">
        <div className="flex text-pink-700 font-bold">
          <span className="bg-pink-600 rounded-sm h-6 w-3"></span>
          <span className="ml-4 capitalize"><h1>Categories</h1></span>
        </div>
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
                    <div key={category.categoryId} 
                    className="w-full  max-w-[200px] flex flex-col items-center justify-center gap-2 p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 cursor-pointer"
                    onClick={() => console.log(category.name)}
                    >
                        <div className="flex items-center justify-center bg-gray-200 rounded-full p-3">
                            {category.icon}
                        </div>
                        <span className="text-lg font-semibold">{category.name}</span>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default page;
