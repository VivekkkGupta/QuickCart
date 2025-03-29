"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { UserAddress } from "@/data/data";

const PaymentDetails = () => {
  const [addresses, setAddresses] = useState(UserAddress);
  const [formData, setFormData] = useState({
    address1: "",
    address2: "",
    city: "",
    state: "",
    pin: "",
    receiver: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDelete = (id) => {
    const newAddress = addresses.filter((address) => address.id !== id);
    //API call to delete address
    setAddresses(newAddress);
    console.log(newAddress);
  }

  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <Card className="">
        <CardHeader>
          <h2 className="text-xl font-bold text-red-500">Add new Address</h2>
        </CardHeader>
        <CardContent>
          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Label className={`mb-2`}>Receiver Name</Label>
              <Input
                type="text"
                name="receiver"
                value={formData.receiver}
                onChange={handleChange}
                placeholder="Receiver Name"
                className="bg-gray-100"
              />
            </div>
            <div>
              <Label className={`mb-2`}>Address Line 1</Label>
              <Input
                type="text"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                placeholder="Addess Line 1"
                className="bg-gray-100"
              />
            </div>
            <div>
              <Label className={`mb-2`}>Address Line 2</Label>
              <Input
                type="text"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                placeholder="Address Line 2"
                className="bg-gray-100"
              />
            </div>
            <div>
              <Label className={`mb-2`}>PinCode</Label>
              <Input
                type="text"
                name="pin"
                value={formData.pin}
                onChange={handleChange}
                placeholder="Pin Code"
                className="bg-gray-100"
              />
            </div>
            <div>
              <Label className={`mb-2`}>City</Label>
              <Input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="bg-gray-100"
              />
            </div>
            <div>
              <Label className={`mb-2`}>State</Label>
              <Input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="bg-gray-100"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-4 mt-6">
            <Button variant="ghost">Cancel</Button>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={() => console.log(formData)}
            >
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-red-500">Saved Addresses</h2>
        </CardHeader>
        <CardContent>
          {addresses.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center text-gray-500 py-10">
              <p className="text-lg font-medium">No addresses found</p>
              <p className="text-sm mt-2">
                You haven't added any addresses yet. Add a new address to get started.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {address.receiver}
                  </h3>
                  <p className="text-sm text-gray-600">{address.address1}</p>
                  {address.address2 && (
                    <p className="text-sm text-gray-600">{address.address2}</p>
                  )}
                  <p className="text-sm text-gray-600">
                    {address.city}, {address.state} - {address.pin}
                  </p>
                  <div className="flex justify-end gap-4 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setFormData(address)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(address.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentDetails;
