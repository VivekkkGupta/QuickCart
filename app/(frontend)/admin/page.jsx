'use client'
import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/contexts/AppContext";
import { toast } from "sonner";
import axios from "axios";
const AddProduct = () => {
  const { categories } = useAppContext();

  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState();
  const [offerPrice, setOfferPrice] = useState();
  const [stock, setStock] = useState();
  const [tags, setTags] = useState([]);
  const [formData, setFormData] = useState({});
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (file, index) => {
    setLoading(true);
  
    try {
      // const imageUrl = await uploadImageToCloudinary(file);
  
      // const updatedFiles = [...files];
      // updatedFiles[index] = imageUrl;
      // setFiles(updatedFiles);
  
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Error uploading image.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !price || !offerPrice || !stock || !category) {
      alert("Please fill in all required fields.");
      return;
    }

    const images =
      files.length === 0
        ? [
            "https://res.cloudinary.com/dc7knilfk/image/upload/v1745910888/640px-Product_sample_icon_picture_zqtyq2.png",
          ]
        : files;

    const finalTags = tags.length === 0 ? [name] : tags;

    setFormData({
      name,
      description,
      price,
      discount: offerPrice,
      category,
      stock,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
      images,
      tags: finalTags,
    });

    console.log("Form Data Submitted:", {
      name,
      description,
      price,
      discount: offerPrice,
      category,
      stock,
      images,
      tags: finalTags,
    });
  };

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
        <div>
          <p className="text-base font-medium">Product Image</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="relative">
                <label htmlFor={`image${index}`}>
                  <input
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        handleImageUpload(e.target.files[0], index);
                      }
                    }}
                    type="file"
                    id={`image${index}`}
                    hidden
                  />
                  <Image
                    className="max-w-24 cursor-pointer"
                    src={
                      files[index]
                        ? files[index]
                        : assets.upload_area
                    }
                    alt=""
                    width={100}
                    height={100}
                  />
                </label>
                {files[index] && (
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label
            className="text-base font-medium"
            htmlFor="product-description"
          >
            Product Description
          </label>
          <textarea
            id="product-description"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">
              Product Price
            </label>
            <input
              id="product-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>
          <div className="flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="offer-price">
              Discount %
            </label>
            <input
              id="offer-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              onChange={(e) => setOfferPrice(e.target.value)}
              value={offerPrice}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-32">
          <label className="text-base font-medium" htmlFor="stock-unit">
            Stock Unit
          </label>
          <input
            id="stock-unit"
            type="number"
            placeholder="0"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            onChange={(e) => setStock(e.target.value)}
            value={stock}
            required
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-base font-medium" htmlFor="tags">
            Tags (comma separated)
          </label>
          <input
            id="tags"
            type="text"
            placeholder="Type here"
            className="outline-none  w-full md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            onChange={(e) => setTags(e.target.value.split(","))}
            value={tags}
          />
        </div>
        <button
          type="submit"
          className="px-8 py-2.5 bg-orange-600 text-white font-medium rounded"
          disabled={loading}
        >
          {loading ? "Uploading..." : "ADD"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;