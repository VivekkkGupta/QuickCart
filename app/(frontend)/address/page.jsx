"use client";

import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const AddAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingAddress, setEditingAddress] = useState(null);

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone Number is required"),
    area: Yup.string().required("Address (Area and Street) is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    zipcode: Yup.string()
      .matches(/^\d{6}$/, "Zip Code must be 6 digits")
      .required("Zip Code is required"),
  });

  const fetchAddresses = async () => {
    try {
      const { data } = await axios.get("/api/address/get-address");
      setAddresses(data.addresses || []);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitHandler = async (values, resetForm) => {
    try {
      if (editingAddress) {
        // Update existing address
        await axios.put(`/api/address/update-address/${editingAddress.id}`, values);
        setEditingAddress(null);
      } else {
        // Add new address
        await axios.post("/api/address/add-address", values);
      }
      fetchAddresses();
      resetForm();
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/address/delete-address/${id}`);
      fetchAddresses();
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <>
      <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between gap-10">
        {/* Address List */}
        <div className="w-full md:w-1/2">
          <p className="text-2xl md:text-3xl text-gray-500">
            Your <span className="font-semibold text-orange-600">Addresses</span>
          </p>
          <div className="space-y-4 mt-6">
            {isLoading ? (
              <p>Loading addresses...</p>
            ) : addresses.length > 0 ? (
              addresses.map((address) => (
                <div
                  key={address.id}
                  className="p-4 border border-gray-300 rounded shadow-sm flex flex-col gap-2"
                >
                  <p className="text-gray-700 font-semibold">{address.name}</p>
                  <p className="text-gray-500">{address.phone}</p>
                  <p className="text-gray-500">{address.street}</p>
                  <p className="text-gray-500">
                    {address.city}, {address.state}, {address.country} - {address.zipCode}
                  </p>
                  <div className="flex gap-4 mt-2">
                    <button
                      onClick={() => handleEdit(address)}
                      className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition"
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
        <div className="w-full md:w-1/2">
          <Formik
            initialValues={{
              fullName: editingAddress?.fullName || "",
              phoneNumber: editingAddress?.phoneNumber || "",
              area: editingAddress?.area || "",
              city: editingAddress?.city || "",
              state: editingAddress?.state || "",
              country: editingAddress?.country || "",
              zipcode: editingAddress?.zipcode || "",
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
                    name="fullName"
                    placeholder="Full Name"
                    className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-500"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                  <Field
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-500"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                  <Field
                    as="textarea"
                    name="area"
                    placeholder="Address (Area and Street)"
                    className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-500 resize-none"
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
                    name="zipcode"
                    placeholder="Zip Code"
                    className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-300 rounded outline-none w-full text-gray-500"
                  />
                  <ErrorMessage
                    name="zipcode"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="max-w-sm w-full mt-6 bg-orange-600 text-white py-3 hover:bg-orange-700 uppercase transition"
                >
                  {editingAddress ? "Update Address" : "Save Address"}
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