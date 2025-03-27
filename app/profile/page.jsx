"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex mx-auto max-w-[1240px]">
      {/* Sidebar */}
      <div className="w-1/4 p-6 bg-white shadow-xs">
        <h2 className="font-semibold text-lg mb-4">Manage My Account</h2>
        <ul className="space-y-2 pl-8 text-sm">
          <li className="text-red-500 font-medium">My Profile</li>
          <li className="text-gray-500">Address Book</li>
          <li className="text-gray-500">My Payment Options</li>
        </ul>

        <h2 className="font-semibold text-lg mt-6 mb-2">My Orders</h2>
        <ul className="space-y-2  pl-8 text-sm">
          <li className="text-gray-500">My Returns</li>
          <li className="text-gray-500">My Cancellations</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <h2 className="text-xl font-bold text-red-500">Edit Your Profile</h2>
          </CardHeader>
          <CardContent>
            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label className={`mb-2`}>First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="bg-gray-100"
                />
              </div>
              <div>
                <Label className={`mb-2`}>Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="bg-gray-100"
                />
              </div>
              <div>
                <Label className={`mb-2`}>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-gray-100"
                />
              </div>
              <div>
                <Label className={`mb-2`}>Address</Label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="bg-gray-100"
                />
              </div>
            </div>

            {/* Password Change Section */}
            {/* <div className="mt-6">
              <h3 className="text-lg font-semibold">Password Changes</h3>
              <Input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Current Password"
                className="mt-2"
              />
              <Input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                className="mt-2"
              />
              <Input
                type="password"
                name="confirmNewPassword"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                placeholder="Confirm New Password"
                className="mt-2"
              />
            </div> */}

            {/* Buttons */}
            <div className="flex items-center justify-end gap-4 mt-6">
              <Button variant="ghost">Cancel</Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white">Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
