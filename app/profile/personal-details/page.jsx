"use client";

import { useState } from "react";
import PersonalDetails from "@/components/ProfileComponents/PersonalDetails";
import AddressDetails from "@/components/ProfileComponents/AddressDetails";
import PaymentDetails from "@/components/ProfileComponents/PaymentDetails";

const page = () => {


  return (
    <>
      <PersonalDetails />
      {/* <AddressDetails />
      <PaymentDetails /> */}
    </>
  )
}
export default page;
