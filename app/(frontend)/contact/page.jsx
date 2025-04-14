"use client";
import React from "react";
import { Mail, PhoneCall, PhoneIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function Page() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div className="max-w-[1240px] mx-auto w-full flex flex-col lg:flex-row gap-10 py-40">
      {/* Contact Info */}
      <div className="shadow-md w-full lg:w-1/3 flex p-6 items-center justify-center bg-white rounded-lg">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex items-center gap-4 text-gray-800">
            <span className="bg-black text-white rounded-full p-3">
              <PhoneIcon />
            </span>
            <div>
              <h3 className="text-lg font-semibold">Call to Us</h3>
              <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
              <p className="text-sm font-semibold">Phone: +919970473600</p>
            </div>
          </div>
          <Separator />
          <div className="flex items-center gap-4 text-gray-800">
            <span className="bg-black text-white rounded-full p-3">
              <Mail />
            </span>
            <div>
              <h3 className="text-lg font-semibold">Write to Us</h3>
              <p className="text-sm text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-sm font-semibold">customer@quickcart.com</p>
              <p className="text-sm font-semibold">support@quickcart.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full lg:w-2/3 shadow-md rounded-lg flex items-center justify-center py-4">
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-8 relative w-full px-4">
          <div className="flex gap-3 flex-col md:flex-row">
            <Input
              type="text"
              placeholder="Name *"
              className="w-full p-3 border border-gray-300 rounded-md "
              required
            />
            <Input
              type="email"
              placeholder="Email *"
              className="w-full p-3 border border-gray-300 rounded-md "
              required
            />
            <Input
              type="tel"
              placeholder="Contact Number *"
              className="w-full p-3 border border-gray-300 rounded-md "
              required
            />
          </div>
          <Textarea
            placeholder="Message *"
            rows="10"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          ></Textarea>
          <Button
            type="submit"
            className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-700 cursor-pointer"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Page;
