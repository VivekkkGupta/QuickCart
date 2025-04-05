"use client";

import { useAppContext } from "@/contexts/AppContext";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

function CartIconButton() {
  const { getCartCount } = useAppContext();
  const count = getCartCount();
  return (
    <Link href={"/cart"} className="relative p-1">
      {count === 0 ? (
        ""
      ) : (
        <span className="absolute text-xs text-white right-0 top-0 bg-orange-500 rounded-full w-4 h-4 flex items-center justify-center">
          {count}
        </span>
      )}
      <ShoppingCart />
    </Link>
  );
}

export default CartIconButton;
