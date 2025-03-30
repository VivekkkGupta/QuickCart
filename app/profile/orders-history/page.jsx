"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { orderHistory } from "@/data/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

function page() {
  const [orderHistoryState, setOrderHistoryState] = useState(orderHistory);
  const [searchText, setSearchText] = useState();

  const handleHistorySearch = (e) => {
    const searchtext = e.target.value;

    const filteredOrder = orderHistory.filter((order) => {
      return order.items.some((item) => {
        return item.name.toLowerCase().startsWith(searchtext.toLowerCase());
      });
    });

    setOrderHistoryState(filteredOrder);
    // console.log(filteredOrder)
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-red-500">Orders History</h2>
        <div className="w-full max-w-sm items-center space-x-2 hidden md:flex">
          <Input
            type="text"
            placeholder="search product"
            name="searchtext"
            value={searchText}
            onChange={handleHistorySearch}
          />
          <Button type="submit" variant={""} className={`cursor-pointer`}>
            <Search />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <>
          {orderHistoryState.map((order) => (
            <div
              key={order.id}
              className="border p-4 rounded-lg shadow-md flex items-start justify-between "
            >
              <div className="">
                <h3 className="text-lg font-bold">Order ID: {order.id}</h3>
                <p className="text-sm text-gray-500">
                  Order Date: {order.orderDate}
                </p>
                <p className="text-sm text-gray-500">
                  Payment: {order.paymentMethod}
                </p>
                <p className="text-sm text-gray-600">Status: {order.status}</p>

                <ul className="mt-2">
                  {order.items.map((item, index) => (
                    <li key={index} className="text-sm flex gap-5 mt-2 items-center">
                      <Image src={item.image || "/dummyimage.png"} alt={item.name} width={30} height={30}/>
                      {item.quantity}x {item.name} - ₹{item.price} 
                    </li>
                  ))}
                </ul>

                
              </div>
              <div className="h-full flex flex-col items-center justify-between">
                <p className="text-md font-semibold">
                  Total: ₹{order.totalAmount}
                </p>
                <Button>View Details</Button>
              </div>
            </div>
          ))}
        </>
      </CardContent>
    </Card>
  );
}

export default page;
