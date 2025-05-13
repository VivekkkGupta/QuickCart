'use client'

import { addressDummyData } from "@/assets/assets";
import { useAppContext } from '@/contexts/AppContext';
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import React, { useEffect, useState } from 'react'
import { toast } from "sonner";


function OrderSummary() {

  const { router, cartLoading, placeOrder, currency, getCartCount, getCartAmount, selectedAddress, setSelectedAddress, addresses } = useAppContext()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setIsDropdownOpen(false);
  };

  const createOrder = () => {
    // console.log("clicked")
    if(getCartCount() === 0) {
      toast.error("Your cart is empty")
      return
    }
    if(selectedAddress === null) {
      toast.error("Please select an address")
      return
    }
    if(cartLoading) {
      toast.error("Please wait, your cart is being updated")
      return
    }
    
    placeOrder()
    // router.push('/payment-gateway')
  }


  return (
    <div className="w-full md:w-96 bg-gray-500/5 p-5">

      <h2 className="text-xl md:text-2xl font-medium text-gray-700">
        Order Summary
      </h2>

      <hr className="border-gray-500/30 my-5" />

      <div className="space-y-6">

        <div>
          <label className="text-base font-medium uppercase text-gray-600 block mb-2">
            Select Address
          </label>
          <div className="relative inline-block w-full text-sm border">
            <button
              className="peer w-full text-left px-4 pr-2 py-2 bg-white text-gray-700 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>
                {selectedAddress
                  ? <>
                    {`${selectedAddress.name} - ${selectedAddress.phone}  `} <br /> {` ${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country} - ${selectedAddress.zipCode}`}
                  </>
                  : "Select Address"}
              </span>
              <svg className={`w-5 h-5 inline float-right transition-transform duration-200 ${isDropdownOpen ? "rotate-0" : "-rotate-90"}`}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B7280"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute w-full bg-white border shadow-md mt-1 z-10 py-1.5">
                {addresses.map((address, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer"
                    onClick={() => handleAddressSelect(address)}
                  >
                    {`${address.name} - ${address.phone}  `} <br /> {` ${address.street}, ${address.city}, ${address.state}, ${address.country} - ${address.zipCode}`}
                  </li>
                ))}
                <li
                  onClick={() => router.push("/address")}
                  className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer text-center"
                >
                  + Add New Address
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* <div>
          <label className="text-base font-medium uppercase text-gray-600 block mb-2">
            Promo Code
          </label>
          <div className="flex flex-col items-start gap-3">
            <input
              type="text"
              placeholder="Enter promo code"
              className="flex-grow w-full outline-none p-2.5 text-gray-600 border"
            />
            <button className="bg-orange-600 text-white px-9 py-2 hover:bg-orange-700">
              Apply
            </button>
          </div>
        </div> */}

        <hr className="border-gray-500/30 my-5" />

        <div className="space-y-4 relative">
          {
            cartLoading && (
              <div className="w-full h-full z-10 absolute top-0 right-0 flex items-center justify-center backdrop-blur-xs">
                <LoaderCircle className="animate-spin" />
              </div>
            )
          }
          <div className="flex justify-between text-base font-medium">
            <p className="uppercase text-gray-600">Items {getCartCount()}</p>
            <p className="text-gray-800">{currency}{getCartAmount()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Shipping Fee</p>
            <p className="font-medium text-gray-800">Free</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Tax (2%)</p>
            <p className="font-medium text-gray-800">{currency}{Math.floor(getCartAmount() * 0.02)}</p>
          </div>
          <div className="flex justify-between text-lg md:text-xl font-medium border-t pt-3">
            <p>Total</p>
            <p>{currency}{getCartAmount() + Math.floor(getCartAmount() * 0.02)}</p>
          </div>
        </div>
      </div>

      <button onClick={createOrder} className="w-full bg-orange-600 text-white py-3 mt-5 hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300"
        disabled={cartLoading}
      >
        Place Order
      </button>
    </div>
  )
}

export default OrderSummary