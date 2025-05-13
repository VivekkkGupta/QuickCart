"use client";

import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useRef } from "react";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";

const AddAddress = () => {
  const formRef = useRef(null);

  const { loading, setLoading, addresses, fetchAddresses } = useAppContext()
  const [editingAddress, setEditingAddress] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone Number is required"),
    street: Yup.string().required("Address (Area and Street) is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    zipCode: Yup.string()
      .matches(/^\d{6}$/, "Zip Code must be 6 digits")
      .required("Zip Code is required"),
  });


  const onSubmitHandler = async (values, resetForm) => {

    try {
      if (editingAddress) {
        // Update existing address
        setLoading(true)
        await axios.post(`/api/address/update-address/${editingAddress.id}`, values);
        setEditingAddress(null);
      } else {
        // Add new address
        setLoading(true)
        const { data } = await axios.post("/api/address/add-address", values);
        setLoading(false)
        // console.log(data)
      }
      fetchAddresses();
      resetForm();
      editingAddress ? toast.success("Address Edited Successfully") : toast.success("Address Added Successfully")
    } catch (error) {
      console.error("Error saving address:", error);
    }
    finally {
      setLoading(false)
    }
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true)
      await axios.post(`/api/address/delete-address/${id}`);
      fetchAddresses();
      toast.success("Successfully Deleted Address")
    } catch (error) {
      console.error("Error deleting address:", error);
      toast.error("Unable to Delete Address")
    }
    finally {
      setLoading(false)
    }
  };


  return (
    <>
      <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between gap-10">
        {/* Address List */}
        <div className="w-full md:w-1/2 max-h-screen overflow-y-scroll pr-5">
          <p className="text-2xl md:text-3xl text-gray-500">
            Your <span className="font-semibold text-orange-600">Addresses</span>
          </p>
          <div className="space-y-6 mt-6">
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="relative z-0 flex flex-col w-full md:max-w-[250px] p-2 animate-pulse"
                >
                  <div className="mt-4 h-4 bg-gray-300 rounded-md w-3/4"></div>
                  <div className="mt-2 h-3 bg-gray-300 rounded-md w-1/2"></div>
                  <div className="flex gap-4">
                    <div className="mt-4 h-6 bg-gray-300 rounded-md w-full"></div>
                    <div className="mt-4 h-6 bg-gray-300 rounded-md w-full"></div>
                  </div>
                </div>
              ))
            ) : addresses.length > 0 ? (
              addresses.map((address) => (
                <div
                  key={address.id}
                  className="p-5 border border-orange-200 rounded-xl shadow-sm hover:shadow-md transition duration-300 bg-white"
                >
                  <p className="text-lg font-semibold text-gray-700">{address.name}</p>
                  <p className="text-sm text-gray-600">{address.phone}</p>
                  <p className="text-sm text-gray-600 whitespace-pre-line">{address.street}</p>
                  <p className="text-sm text-gray-600">
                    {address.city}, {address.state}, {address.country} - {address.zipCode}
                  </p>
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => handleEdit(address)}
                      className="px-4 py-2 text-sm text-white bg-orange-500 rounded hover:bg-orange-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(address.id)}
                      className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No addresses found.</p>
            )}
          </div>
        </div>


        {/* Address Form */}
        <div className="w-full md:w-1/2" ref={formRef}>
          <Formik
            initialValues={{
              name: editingAddress?.name || "",
              phone: editingAddress?.phone || "",
              street: editingAddress?.street || "",
              city: editingAddress?.city || "",
              state: editingAddress?.state || "",
              country: editingAddress?.country || "",
              zipCode: editingAddress?.zipCode || "",
            }}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              onSubmitHandler(values, resetForm);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-full">
                <p className="text-2xl md:text-3xl text-gray-500">
                  {editingAddress ? "Edit" : "Add"} Shipping{" "}
                  <span className="font-semibold text-orange-600">Address</span>
                </p>

                <div className="space-y-3 max-w-sm mt-10">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-500"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-500"
                  />
                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                  <Field
                    as="textarea"
                    name="street"
                    placeholder="Address (Area and Street)"
                    className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-500 resize-none"
                  />
                  <ErrorMessage
                    name="street"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                  <Field
                    type="text"
                    name="city"
                    placeholder="City"
                    className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-500"
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
                    className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-500"
                  />
                  <ErrorMessage
                    name="state"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                  <Field
                    type="text"
                    name="country"
                    placeholder="Country"
                    className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-500"
                  />
                  <ErrorMessage
                    name="country"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                  <Field
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-500"
                  />
                  <ErrorMessage
                    name="zipCode"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="max-w-sm w-full mt-6 bg-orange-600 text-white py-3 hover:bg-orange-700 uppercase transition"
                  disabled={loading}
                >
                  {loading ?
                    <div className="w-full flex items-center justify-center">

                      <LoaderCircle className="animate-spin" />
                    </div>
                    : editingAddress ? "Update Address" : "Save Address"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddAddress;