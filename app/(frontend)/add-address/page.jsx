"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddAddress = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone Number is Required"),
    area: Yup.string().required("Area is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string()
      .matches(/^\d{6}$/, "Pin Code must be 6 digits")
      .required("Pin Code is required"),
  });

  const [address, setAddress] = useState({
    fullName: "",
    phoneNumber: "",
    pincode: "",
    area: "",
    city: "",
    state: "",
  });

  const onSubmitHandler = async (values, resetForm) => {
    // console.log(values)
    
    // save to DB using API

    // resetForm();
  
};

  return (
    <>
      <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between">
        <Formik
          initialValues={{
            fullName: "",
            phoneNumber: "",
            pincode: "",
            area: "",
            city: "",
            state: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmitHandler(values, resetForm);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full">
              <p className="text-2xl md:text-3xl text-gray-500">
                Add Shipping  
                <span className="font-semibold text-orange-600">    Address</span>
              </p>

              <div className="space-y-3 max-w-sm mt-10">
                <Field
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                />
                <ErrorMessage
                  name="fullName"
                  component="p"
                  className="text-red-500 text-sm"
                />
                <Field
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone number"
                  className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="p"
                  className="text-red-500 text-sm"
                />
                <Field
                  type="text"
                  name="pincode"
                  placeholder="Pin code"
                  className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                />
                <ErrorMessage
                  name="pincode"
                  component="p"
                  className="text-red-500 text-sm"
                />
                <Field
                as="textarea"
                  type="text"
                  name="area"
                  placeholder="Address (Area and Street)"
                  className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500 resize-none"
                />
                <ErrorMessage
                  name="area"
                  component="p"
                  className="text-red-500 text-sm"
                />
                <Field
                  type="text"
                  name="city"
                  placeholder="City"
                  className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                />
                <ErrorMessage
                  name="city"
                  component="p"
                  className="text-red-500 text-sm"
                />
                <Field
                  type="text"
                  name="state"
                  placeholder="State"
                  className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                />
                <ErrorMessage
                  name="state"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
            type="submit"
            className="max-w-sm w-full mt-6 bg-orange-600 text-white py-3 hover:bg-orange-700 uppercase"
          >
            Save address
          </button>
            </Form>
          )}
        </Formik>

      
        <Image
          className="md:mr-16 mt-16 md:mt-0"
          src={assets.my_location_image}
          alt="my_location_image"
        />
      </div>
    </>
  );
};

export default AddAddress;
