import Image from "next/image";
import { LoaderCircle } from "lucide-react";
import { BASE_URL } from "@/lib/constants/constants";

function loading() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full text-center gap-4">
        <Image src={`${BASE_URL}/images/logos/logo.svg`} alt="logo" width={60} height={60} />
        <LoaderCircle className="animate-spin"/>
      </div>
    </>
  )
}

export default loading