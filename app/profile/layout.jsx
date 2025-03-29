"use client"
import { useAppContext } from "@/contexts/AppContext";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Layout = ({ children }) => {
    const { routesObject } = useAppContext();
    const pathname = usePathname();

    // Get current tab from pathname
    const currentTab = pathname.split('/').pop() || 'profile';

    return (
        <div className="w-full h-full">
            <div className="flex mx-auto max-w-[1240px] gap-10">
                {/* Sidebar */}
                <div className="w-1/4 p-10 drop-shadow-lg rounded-lg border h-full sticky top-5">
                    <h2 className="font-semibold text-lg mb-4">Manage My Account</h2>
                    <ul className="space-y-2 pl-8 text-sm">
                        <li>
                            <Link
                                href={routesObject.profile.path}
                                className={`${currentTab === "personal-details" ? "text-red-500" : "text-gray-500 hover:text-gray-700"} font-medium cursor-pointer`}
                            >
                                Personal Details
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={routesObject.address.path}
                                className={`${currentTab === "address" ? "text-red-500" : "text-gray-500 hover:text-gray-700"} font-medium cursor-pointer`}
                            >
                                Address Book
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={routesObject.payment.path}
                                className={`${currentTab === "payment" ? "text-red-500" : "text-gray-500 hover:text-gray-700"} font-medium cursor-pointer`}
                            >
                                Payment Options
                            </Link>
                        </li>
                    </ul>

                    <h2 className="font-semibold text-lg mt-6 mb-2">Orders</h2>
                    <ul className="space-y-2 pl-8 text-sm">
                        <li>
                            <Link
                                href={routesObject.orders.path}
                                className={`${currentTab === "orders" ? "text-red-500" : "text-gray-500 hover:text-gray-700"} font-medium cursor-pointer`}
                            >
                                Orders
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={routesObject.returns.path}
                                className={`${currentTab === "returns" ? "text-red-500" : "text-gray-500 hover:text-gray-700"} font-medium cursor-pointer`}
                            >
                                Returns
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 h-full w-full">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
