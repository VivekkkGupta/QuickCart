"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
    <Card className="mx-auto">
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
            <Label className={`mb-2`}>Phone</Label>
            <Input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="bg-gray-100"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-4 mt-6">
          <Button variant="ghost">Cancel</Button>
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalDetails;
