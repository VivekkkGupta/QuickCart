import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  const { userId: clerkId } = await auth();

  if (!clerkId) {
    return NextResponse.json({ message: "Not authorized" }, { status: 401 });
  }

  // Find internal user by clerkId
  const user = await prisma.user.findUnique({
    where: { clerkId },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: user.id,
      },
      include: {
        address: true,
        items: {
          include: {
            product: true,
          },
        },
      }
    });

    return NextResponse.json(
      { message: "success", orders: orders },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "failure", error }, { status: 500 });
  }

};


export const POST = async (req) => {
  try {
    const body = await req.json();
    const { userId, addressId, products } = body;

    if (!userId || !addressId || !Array.isArray(products) || products.length === 0) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ message: "Not authorized" }, { status: 401 });
    }
    // Find internal user by clerkId
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    let totalPrice = 0;

    // Calculate total price
    const productDetails = await Promise.all(
      products.map(async (item) => {
        const product = await prisma.product.findUnique({ where: { id: item.productId } });
        if (!product) throw new Error(`Product not found: ${item.productId}`);
        totalPrice += (product.price * item.quantity);
        return { ...item, price: product.price };
      })
    );

    // Create the order
    const order = await prisma.order.create({
      data: {
        userId: user.id,
        addressId,
        totalPrice,
        items: {
          create: productDetails.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          }))
        }
      },
      include: {
        items: true
      }
    });

    return NextResponse.json({ message: "Order created", order }, { status: 201 });

  } catch (error) {
    console.log("ORDER POST ERROR:", error);
    return NextResponse.json({ message: "Failed to create order", error }, { status: 500 });
  }
};
