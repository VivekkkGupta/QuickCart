import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const orders = await prisma.order.findMany({
            include:{
                product:true,
                user:true,
                address:true
            }
        });
        console.log(orders)
        return NextResponse.json({
            message: "success",
            orders: orders,
        }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failure",
            error: error,
        }, { status: 500 });
    }
};