"use client";

import { useAppContext } from "@/contexts/AppContext";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

function CartProducts() {
  const {
    cartProducts,
    getCartCount,
    updateCartQuantity,
    handleAddToCart,
    cartLoading,
  } = useAppContext();

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 border-b border-gray-300 pb-6">
        <p className="text-2xl md:text-3xl text-gray-700">
          Your <span className="font-semibold text-orange-600">Cart</span>
        </p>
        <p className="text-lg md:text-xl text-gray-600">
          {getCartCount()} Items
        </p>
      </div>

      {/* Content */}
      {cartLoading ? (
        // Skeleton Loader
        Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="relative z-0 flex w-full gap-4 py-4 px-4 animate-pulse border-b border-gray-200"
          >
            <div className="w-16 h-16 bg-gray-300 rounded-md"></div>
            <div className="flex-1 space-y-2">
              <div className="w-3/4 h-4 bg-gray-300 rounded-md"></div>
              <div className="w-1/2 h-4 bg-gray-300 rounded-md"></div>
            </div>
            <div className="w-16 h-4 bg-gray-300 rounded-md"></div>
            <div className="w-16 h-4 bg-gray-300 rounded-md"></div>
          </div>
        ))
      ) : cartProducts.length === 0 ? (
        // Empty Cart Message
        <div className="text-red-700 text-xl flex items-center justify-center w-full py-10">
          No Products in Cart
        </div>
      ) : (
        // Cart Table
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-4 px-4 text-gray-600 font-medium text-left">
                  Product Details
                </th>
                <th className="py-4 px-4 text-gray-600 font-medium text-left">
                  Price
                </th>
                <th className="py-4 px-4 text-gray-600 font-medium text-left">
                  Quantity
                </th>
                <th className="py-4 px-4 text-gray-600 font-medium text-left">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((product) => (
                <tr
                  key={product.productId}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  {/* Product Details */}
                  <td className="flex items-center gap-4 py-4 px-4">
                    <div className="rounded-lg overflow-hidden bg-gray-100 p-2">
                      <Image
                        src={product.product.images[0]}
                        alt={product.product.name}
                        className="w-16 h-16 object-cover"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-800 font-medium">
                        {product.product.name}
                      </p>
                      <button
                        className="text-xs text-orange-600 mt-1"
                        onClick={() =>
                          updateCartQuantity(product.productId, 0)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="py-4 px-4 text-gray-600">
                    ₹{product.product.price}
                  </td>

                  {/* Quantity */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateCartQuantity(
                            product.productId,
                            product.quantity - 1
                          )
                        }
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                      >
                        -
                      </button>
                      <input
                        onChange={(e) =>
                          updateCartQuantity(
                            product.productId,
                            Number(e.target.value)
                          )
                        }
                        type="number"
                        value={product.quantity}
                        className="w-12 border text-center rounded"
                        disabled
                      />
                      <button
                        onClick={() => handleAddToCart(product.product)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  {/* Subtotal */}
                  <td className="py-4 px-4 text-gray-600">
                    ₹{(product.product.price * product.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Continue Shopping Link */}
      <Link
        href={"/all-products"}
        className="group flex items-center mt-6 gap-2 text-orange-600"
      >
        <Image
          className="group-hover:-translate-x-1 transition"
          src={assets.arrow_right_icon_colored}
          alt="arrow_right_icon_colored"
        />
        Continue Shopping
      </Link>
    </div>
  );
}

export default CartProducts;