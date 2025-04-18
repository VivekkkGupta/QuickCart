import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const { name, phone, street, city, state, country, zipCode } = body;

  const { userId:clerkId } = await auth();

  if (!clerkId) {
    return NextResponse.json({ message: "Not authorized" }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    
    const res = await prisma.address.create({
      data: {
        street,
        city,
        state,
        country,
        zipCode,
        userId:user.id,
        name,
        phone,
      },
    });
    // console.log(res);
    return NextResponse.json(
      {
        message: "success",
        address: res,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "failure", error }, { status: 500 });
  }
};
