"use client";

import { useState } from "react";
import PersonalDetails from "@/components/ProfileComponents/PersonalDetails";
import AddressDetails from "@/components/ProfileComponents/AddressDetails";
import PaymentDetails from "@/components/ProfileComponents/PaymentDetails";

const page = () => {
  
  const [tab, setTab] = useState("profile");

  return (
    <div className="w-full h-full">
  
    <div className="flex mx-auto max-w-[1240px] gap-10 ">
      {/* Sidebar */}
      <div className="w-1/4 p-10  drop-shadow-lg rounded-lg border h-full sticky top-5">
        <h2 className="font-semibold text-lg mb-4">Manage My Account</h2>
        <ul className="space-y-2 pl-8 text-sm">
          <li className={`${tab === "profile" ? "text-red-500" : "text-gray-500 hover:text-gray-700"} font-medium cursor-pointer `} onClick={()=>setTab("profile")}>Profile</li>
          <li className={`${tab === "address" ? "text-red-500" : "text-gray-500 hover:text-gray-700"} font-medium cursor-pointer `} onClick={()=>setTab("address")}>Address Book</li>
          <li className={`${tab === "payment" ? "text-red-500" : "text-gray-500 hover:text-gray-700"} font-medium cursor-pointer `} onClick={()=>setTab("payment")}>Payment Options</li>
        </ul>

        <h2 className="font-semibold text-lg mt-6 mb-2">Orders</h2>
        <ul className="space-y-2  pl-8 text-sm">
          <li className={`${tab === "orders" ? "text-red-500" : "text-gray-500 hover:text-gray-700"} font-medium cursor-pointer `} onClick={()=>setTab("orders")}>Orders</li>
          <li className={`${tab === "returns" ? "text-red-500" : "text-gray-500 hover:text-gray-700"} font-medium cursor-pointer `} onClick={()=>setTab("returns")}>Returns</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full w-full">
        {/* <PersonalDetails/> */}
        {
          tab === "profile" && <PersonalDetails/>
        }
        {
          tab === "address" && <AddressDetails/>
        }
        {
          tab === "payment" && <PaymentDetails/>
        }
        {
          tab === "orders" && <AddressDetails/>
        }
        {
          tab === "returns" && <AddressDetails/>
        }
      </div>
    </div>
    </div>
  );
};

export default page;
