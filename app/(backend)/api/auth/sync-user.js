import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const POST = async () => {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return NextResponse.json({ message: "Not authorized" }, { status: 401 });
  }

  // Get user info from Clerk
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ message: "User not found in Clerk" }, { status: 404 });
  }

  // Upsert user in your DB
  await prisma.user.upsert({
    where: { clerkId },
    update: {
      email: user.emailAddresses[0]?.emailAddress,
      name: user.firstName + " " + user.lastName,
      avatar: user.imageUrl,
    },
    create: {
      clerkId,
      email: user.emailAddresses[0]?.emailAddress,
      name: user.firstName + " " + user.lastName,
      avatar: user.imageUrl,
    },
  });

  return NextResponse.json({ message: "User synced" });
};