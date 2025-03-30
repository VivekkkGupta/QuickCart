"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { returnsHistory } from "@/data/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

function page() {
  const [returnsState, setReturnsState] = useState(returnsHistory);
  const [searchText, setSearchText] = useState("");

  const handleReturnsSearch = (e) => {
    const searchtext = e.target.value;
    setSearchText(searchtext);

    const filteredReturns = returnsHistory.filter((returnItem) => {
      return returnItem.items.some((item) =>
        item.name.toLowerCase().startsWith(searchtext.toLowerCase())
      );
    });

    setReturnsState(filteredReturns);
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-red-500">Returns History</h2>
        <div className="w-full max-w-sm items-center space-x-2 hidden md:flex">
          <Input
            type="text"
            placeholder="Search returned product"
            name="searchtext"
            value={searchText}
            onChange={handleReturnsSearch}
          />
          <Button type="submit" variant={""} className="cursor-pointer">
            <Search />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <>
          {returnsState.map((returnItem) => (
            <div
              key={returnItem.id}
              className="border p-4 rounded-lg shadow-md flex items-start justify-between"
            >
              <div className="">
                <h3 className="text-lg font-bold">Return ID: {returnItem.id}</h3>
                <p className="text-sm text-gray-500">
                  Return Date: {returnItem.returnDate}
                </p>
                <p className="text-sm text-gray-500">
                  Payment: {returnItem.paymentMethod}
                </p>
                <p className="text-sm text-gray-600">Status: {returnItem.status}</p>

                <ul className="mt-2">
                  {returnItem.items.map((item, index) => (
                    <li key={index} className="text-sm flex gap-5 mt-2 items-center">
                      <Image src={item.image || "/dummyimage.png"} alt={item.name} width={30} height={30} />
                      {item.quantity}x {item.name} - ₹{item.price}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-full flex flex-col items-center justify-between">
                <p className="text-md font-semibold">Total: ₹{returnItem.totalAmount}</p>
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
