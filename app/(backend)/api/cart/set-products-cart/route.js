import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const { productId, quantity } = body;

  const { userId: clerkId } = await auth();

  if (!clerkId) {
    return NextResponse.json({ message: "Not authorized" }, { status: 401 });
  }

  if (!productId || typeof quantity !== "number") {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const res = await prisma.cart.upsert({
      where: {
        userId_productId: {
          userId: user.id,
          productId,
        },
      },
      update: {
        quantity,
      },
      create: {
        userId: user.id,
        productId,
        quantity,
      },
    });

    return NextResponse.json(
      { message: "success", product: res },
      { status: 200 }
    );
  } catch (error) {
    console.error("Cart upsert error:", error);
    return NextResponse.json(
      { message: "failure", error: error.message },
      { status: 500 }
    );
  }
};
