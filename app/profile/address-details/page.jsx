"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { UserAddress } from "@/data/data";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const page = () => {
  const [addresses, setAddresses] = useState(UserAddress);

  const validationSchema = Yup.object({
    receiver: Yup.string().required("Receiver Name is required"),
    address1: Yup.string().required("Address Line 1 is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pin: Yup.string()
      .matches(/^\d{6}$/, "Pin Code must be 6 digits")
      .required("Pin Code is required"),
  });

  const handleDelete = (id) => {
    const newAddress = addresses.filter((address) => address.id !== id);
    setAddresses(newAddress);
    console.log("Deleted Address List:", newAddress);
  };

  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-red-500">Saved Addresses</h2>
        </CardHeader>
        <CardContent>
          {addresses.length === 0 ? (
            <p className="text-center text-gray-500">No addresses found</p>
          ) : (
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className="border rounded-lg p-4 shadow-sm hover:shadow-md"
                >
                  <h3 className="font-semibold text-lg">{address.receiver}</h3>
                  <p className="text-sm">{address.address1}</p>
                  {address.address2 && (
                    <p className="text-sm">{address.address2}</p>
                  )}
                  <p className="text-sm">
                    {address.city}, {address.state} - {address.pin}
                  </p>
                  <div className="flex justify-end gap-4 mt-4">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            Are you sure you want to delete this Address?
                          </DialogTitle>
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button type="button" variant="secondary">
                              Close
                            </Button>
                          </DialogClose>
                          <Button
                            type="submit"
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDelete(address.id)}
                          >
                            Delete
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-red-500">Add New Address</h2>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={{
              receiver: "",
              address1: "",
              address2: "",
              city: "",
              state: "",
              pin: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              //   console.log("Address Saved:", values);
              setAddresses([...addresses, { id: Date.now(), ...values }]);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-3xl w-full mx-auto">
                {/* Receiver Name */}
                <div>
                  <Label>Receiver Name</Label>
                  <Field
                    as={Input}
                    type="text"
                    name="receiver"
                    placeholder="Receiver Name"
                    className="bg-gray-100 mt-2"
                  />
                  <ErrorMessage
                    name="receiver"
                    component="p"
                    className="text-red-500 text-sm mt-4"
                  />
                </div>

                {/* Address Line 1 */}
                <div>
                  <Label>Address Line 1</Label>
                  <Field
                    as={Input}
                    type="text"
                    name="address1"
                    placeholder="Address Line 1"
                    className="bg-gray-100  mt-2"
                  />
                  <ErrorMessage
                    name="address1"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Address Line 2 */}
                <div>
                  <Label>Address Line 2</Label>
                  <Field
                    as={Input}
                    type="text"
                    name="address2"
                    placeholder="Address Line 2"
                    className="bg-gray-100  mt-2"
                  />
                </div>

                {/* City */}
                <div>
                  <Label>City</Label>
                  <Field
                    as={Input}
                    type="text"
                    name="city"
                    placeholder="City"
                    className="bg-gray-100  mt-2"
                  />
                  <ErrorMessage
                    name="city"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* State */}
                <div>
                  <Label>State</Label>
                  <Field
                    as={Input}
                    type="text"
                    name="state"
                    placeholder="State"
                    className="bg-gray-100  mt-2"
                  />
                  <ErrorMessage
                    name="state"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Pin Code */}
                <div>
                  <Label>Pin Code</Label>
                  <Field
                    as={Input}
                    type="text"
                    name="pin"
                    placeholder="Pin Code"
                    className="bg-gray-100  mt-2"
                  />
                  <ErrorMessage
                    name="pin"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-end gap-4 col-span-2 mt-6">
                  <Button type="reset" variant="ghost">
                    Reset
                  </Button>
                  <Button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save Address"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
