import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { category } = await params;

    const products = await prisma.category.findFirst({
      where: {
        name: category,
      },
      include: {
        product: {
          include: {
            category: true,
          },
        },
      },
    });

    if (!products) {
      return NextResponse.json(
        { message: "failure", error: "No Products found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "success", products }, { status: 200 });
  } catch (error) {
    console.error("Prisma Error:", error);
    return NextResponse.json(
      { message: "failure", error: error.message },
      { status: 500 }
    );
  }
};
