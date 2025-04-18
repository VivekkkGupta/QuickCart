import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const addressid = params.addressid;

  const { userId: clerkId } = await auth();

  if (!clerkId) {
    return NextResponse.json({ message: "Not authorized" }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({ where: { clerkId } });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const updatedAddress = await prisma.address.delete({
      where: { id: parseInt(addressid) }
    });
    console.log(updatedAddress)
    return NextResponse.json(
      { message: "success", address: updatedAddress },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { message: "failure", error: error.message },
      { status: 500 }
    );
  }
}
