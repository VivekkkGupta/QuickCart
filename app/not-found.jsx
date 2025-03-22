import Image from "next/image";
import { APP_NAME } from "@/lib/constants/constants";
import Link from "next/link";

function notfound() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen w-full text-center gap-2">
                <Image src="images/logos/logo.svg" alt="logo" width={60} height={60} />
                <div className="flex flex-col ">

                    <h1 className="text-lg font-bold mt-4">Page Not found - {APP_NAME}</h1>
                    <p>
                        Go back to &nbsp;
                        <Link href="/" className="underline text-blue-500">
                            Home page
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default notfound