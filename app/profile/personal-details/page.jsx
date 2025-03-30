"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
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
import { personalDetails } from "@/data/data";

const page = () => {
  const [personalDetailsState, setPersonalDetailsState] = useState(personalDetails);

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Firstname Name is required"),
    email: Yup.string().required("Email is required"),
    phone: Yup.string()
    .matches(/^\d{10}$/, "Phone Number must be 10 digits")
    .required("Phone Number is required"),
  });


  return (
    <>
      <Card className="mx-auto">
        <CardHeader>
          <h2 className="text-xl font-bold text-red-500">Edit Your Profile</h2>
        </CardHeader>
        <CardContent>
          {/* Form Fields */}
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              if(!personalDetailsState){
                console.log("Personal Details is empty: ",personalDetailsState)
                return
              }
              setPersonalDetailsState([...personalDetailsState, { id: Date.now(), ...values }]);
              console.log(values)
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-3xl w-full mx-auto">
                {/* First Name */}
                <div>
                  <Label>First Name</Label>
                  <Field
                    as={Input}
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="bg-gray-100 mt-2"
                  />
                  <ErrorMessage
                    name="firstname"
                    component="p"
                    className="text-red-500 text-sm mt-4"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <Label>Last Name</Label>
                  <Field
                    as={Input}
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="bg-gray-100 mt-2"
                  />
                  <ErrorMessage
                    name="lastname"
                    component="p"
                    className="text-red-500 text-sm mt-4"
                  />
                </div>
              
                {/* Email */}
                <div>
                  <Label>Email</Label>
                  <Field
                    as={Input}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 mt-2"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm mt-4"
                  />
                </div>
              
                {/* Phone Number */}
                <div>
                  <Label>Phone Number</Label>
                  <Field
                    as={Input}
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    className="bg-gray-100  mt-2"
                  />
                  <ErrorMessage
                    name="phone"
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
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </Form>
            )}

          </Formik>
        </CardContent>
      </Card>
    </>
  );
};
export default page;
