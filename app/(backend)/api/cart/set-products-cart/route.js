import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const body = await req.json();
    const { productId, quantity } = body;
  
    const { userId } = await auth();
    console.log(userId)
    if (!userId) {
      return NextResponse.json(
        { message: "Not authorized" },
        { status: 401 }
      );
    }
  
    try {
      const res = await prisma.cart.upsert({
        where: {
          userId_productId: {
            userId,
            productId
          }
        },
        update: { quantity },
        create: { userId, productId, quantity }
      });
  
      return NextResponse.json(
        {
          message: "success",
          product: res,
        },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: "failure", error },
        { status: 500 }
      );
    }
  };
  