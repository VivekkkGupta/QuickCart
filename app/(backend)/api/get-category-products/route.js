import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { categoryname } = await req.json(); 
  try {
    const products = await prisma.product.findMany({
      where: {
        category:categoryname,
      },
    });

    if (!products) {
      return NextResponse.json(
        { message: "failure", error: "No Product found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "success", products },
      { status: 200 }
    );
  } catch (error) {
    console.error("Prisma Error:", error);
    return NextResponse.json(
      { message: "failure", error: error.message },
      { status: 500 }
    );
  }
};
