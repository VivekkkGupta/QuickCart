import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const { productId } = await params;

  const { userId: clerkId } = await auth();

  if (!clerkId) {
    return NextResponse.json({ message: "Not authorized" }, { status: 401 });
  }

  // Find internal user
  const user = await prisma.user.findUnique({
    where: { clerkId },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  try {
    const deletedRes = await prisma.cart.delete({
      where: {
        userId_productId: {
          userId: user.id,
          productId,
        },
      },
    });

    return NextResponse.json(
      { message: "success", cart: deletedRes },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ message: "failure", error }, { status: 500 });
  }
};
