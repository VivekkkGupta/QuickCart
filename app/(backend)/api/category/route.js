import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const categories = await prisma.category.findMany();

    if (!categories) {
      return NextResponse.json(
        { message: "failure", error: "No Category found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "success", categories },
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
