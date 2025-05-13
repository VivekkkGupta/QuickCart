'use client';
import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/contexts/AppContext";
import axios from "axios";
import { toast } from "sonner";

// Skeleton Loader Component
const OrdersSkeleton = () => (
  <div className="border-t border-gray-300 text-sm animate-pulse">
    <div className="hidden md:flex font-semibold bg-gray-100 border-b border-gray-300 p-5">
      <div className="flex-1 max-w-80 items-start">Items</div>
      <div className="w-64 items-start">Address</div>
      <div className="w-32 items-start">Total</div>
      <div className="w-64 items-start">Details</div>
    </div>
    {[...Array(3)].map((_, idx) => (
      <div
        key={idx}
        className="flex flex-col md:flex-row gap-5 justify-between p-5 border-b border-gray-300"
      >
        <div className="flex-1 flex gap-5 max-w-80">
          <div className="flex flex-col gap-3 w-full">
            <span className="flex gap-2 items-center">
              <span className="bg-gray-200 rounded w-12 h-12 block" />
              <span className="bg-gray-200 rounded w-32 h-4 block" />
            </span>
            <span className="bg-gray-200 rounded w-20 h-4 block" />
          </div>
        </div>
        <div className="w-64">
          <div className="bg-gray-200 rounded h-16 w-full mb-2" />
          <div className="bg-gray-200 rounded h-4 w-32 mb-1" />
          <div className="bg-gray-200 rounded h-4 w-24" />
        </div>
        <div className="w-32 flex items-start">
          <span className="bg-gray-200 rounded h-6 w-20 block" />
        </div>
        <div className="w-64 flex flex-col gap-2">
          <span className="bg-gray-200 rounded h-4 w-24 block" />
          <span className="bg-gray-200 rounded h-4 w-20 block" />
          <span className="bg-gray-200 rounded h-4 w-16 block" />
        </div>
      </div>
    ))}
  </div>
);

const page = () => {
  const { currency } = useAppContext();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc"); // "desc" for newest first

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("/api/orders");
      if (data.error) {
        toast.error("Error fetching orders");
        setLoading(false);
        return;
      }
      setOrders(data.orders);
    } catch (error) {
      console.log("Error occurred: ", error);
      toast.error("Error fetching orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Sort orders by date
  const sortedOrders = [...orders].sort((a, b) => {
    if (sortOrder === "desc") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
  });

  return (
    <>
      <div className="flex flex-col justify-between w-full">
        <div className="space-y-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
            <h2 className="text-lg font-medium">My Orders</h2>
            <div className="flex items-center gap-2">
              <label htmlFor="sortOrder" className="text-sm font-medium text-gray-700">
                Sort by date:
              </label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="desc">Newest First</option>
                <option value="asc">Oldest First</option>
              </select>
            </div>
          </div>
          {loading ? (
            <OrdersSkeleton />
          ) : (
            sortedOrders.length > 0 ? (
                <div className="border-t border-gray-300 text-sm">
              {/* Table Header */}
              <div className="hidden md:flex font-semibold bg-gray-100 border-b border-gray-300 p-5">
                <div className="flex-1 max-w-80 items-start flex">Items</div>
                <div className="w-64 items-start flex">Address</div>
                <div className="w-32 items-start flex">Total</div>
                <div className="w-64 items-start flex">Details</div>
              </div>
              {/* Table Body */}
              {sortedOrders.map((order, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-5 justify-between p-5 border-b border-gray-300"
                >
                  <div className="flex-1 flex gap-5 max-w-80 items-start">
                    <p className="flex flex-col gap-3">
                      {order.items.map((item) => (
                        <span key={item.product.id} className="flex gap-2 items-center">
                          <Image
                            className="max-w-16 max-h-16 object-cover"
                            src={item.product.images[0]}
                            alt={item.product.name}
                            width={50}
                            height={50}
                          />
                          {item.product.name} x {item.quantity}
                        </span>
                      ))}
                      <span>Items : {order.items.length}</span>
                    </p>
                  </div>
                  <div className="w-64 flex items-start">
                    <p>
                      <span className="font-medium">
                        {order.address.name} - {order.address.phone}
                      </span>
                      <br />
                      <br />
                      <span>{order.address.street}</span>
                      <br />
                      <span>{`${order.address.city}, ${order.address.state}`}</span>
                      <br />
                      <span>{order.address.zipCode}</span>
                    </p>
                  </div>
                  <p className="w-32 font-medium text-orange-500 flex items-start">
                    {currency}
                    {order.totalPrice}
                  </p>
                  <div className="w-64 flex items-start">
                    <p className="flex flex-col">
                      <span>Method : COD</span>
                      <span>Date : {new Date(order.createdAt).toLocaleDateString()}</span>
                      <span>Status: {order.status}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>):(
                <div className="text-red-700 text-xl flex items-center justify-center w-full py-10">
                    No Orders Found
                </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default page;