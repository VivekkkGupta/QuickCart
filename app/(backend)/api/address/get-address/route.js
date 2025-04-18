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
    const userAdresses = await prisma.address.findMany({
      where: {
        userId: user.id, 
      },
    });

    return NextResponse.json(
      { message: "success", addresses: userAdresses },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "failure", error }, { status: 500 });
  }
};
