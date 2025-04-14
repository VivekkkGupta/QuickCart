import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = await params; 

  try {
    const product = await prisma.product.findUnique({
      where: {
        slug,
      },
    });

    if (!product) {
      return NextResponse.json(
        { message: "failure", error: "No Product found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "success", product },
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
