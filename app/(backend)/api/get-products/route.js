import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const products = await prisma.product.findMany();
    // console.log(products)
    return NextResponse.json({
      message: "success",
      products: products,
    },{status:200});
  } catch (error) {
    return NextResponse.json({
      message: "failure",
      error: error,
    },{status:500});
  }
};
