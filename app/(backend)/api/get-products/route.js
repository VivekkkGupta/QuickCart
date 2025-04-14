import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export const GET = async () => {
  try {
    const products = await prisma.product.findMany();
    // console.log(products)
    return NextResponse.json({
      message: "success",
      products: products,
    });
  } catch (error) {
    return NextResponse.json({
      message: "failure",
      error: error,
    });
  }
};
