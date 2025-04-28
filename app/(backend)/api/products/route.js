import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();  

    const {
      images,
      name,
      description,
      price,
      discount,
      category,
      stock,
      tags,
    } = body;
    //   {
    //     "images":["https://res.cloudinary.com/dc7knilfk/image/upload/v1745349853/sm_controller_image_zkaqac.png"],
    //     "slug":"new-product", // Generate in Backend
    //     "name":"New Product",
    //     "description":"New Description",
    //     "price":"9999",
    //     "discount":"5",
    //     "category":"laptops",
    //     "stock": "10",
    //     "tags":["laptop"]
    // }

    const slugify = (text) =>
      text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word characters
        .replace(/--+/g, "-"); // Replace multiple - with a single -

    const slug = slugify(name);

    if (isNaN(price) || isNaN(discount)) {
      return NextResponse.json(
        { message: "Invalid price or discount" },
        { status: 400 }
      );
    }

    const categoryDetails = await prisma.category.findFirst({
      where: {
        name: category,
      },
    });

    if (!categoryDetails) {
      return NextResponse.json(
        { message: "Category not found" },
        { status: 404 }
      );
    }

    if (!Array.isArray(tags)) {
      return NextResponse.json(
        { message: "Tags must be an array" },
        { status: 400 }
      );
    }

    const res = await prisma.product.create({
      data: {
        name,
        description,
        slug,
        price: parseFloat(price),
        discount: parseFloat(discount),
        images,
        categoryId: categoryDetails.id,
        stock,
        tags,
      },
    });

    return NextResponse.json(
      {
        message: "success",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: "failure",
        error: error,
      },
      { status: 500 }
    );
  }
}
