'use client'

import { APP_NAME } from '@/lib/constants/constants';
import Image from 'next/image';
import { Facebook, FacebookIcon, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useAppContext } from '@/contexts/AppContext';

function Footer() {
    const currentYear = new Date().getFullYear();
    const { routesObject } = useAppContext()
    return (
        <footer className="w-full bg-black text-gray-300 text-sm">
            <div className="max-w-[1240px] mx-auto py-10 px-5 grid grid-cols-1 text-center md:text-left md:grid-cols-4 gap-6">
                {/* Exclusive - Subscription */}
                <div>
                    <h3 className="text-white font-semibold text-lg">{APP_NAME}</h3>

                    <p className="text-gray-400 mt-2">Maharashtra, India</p>
                    <p className="text-gray-400 mt-1">quickcart@gmail.com</p>
                </div>

                {/* Account Section */}
                <div>
                    <h3 className="text-white font-semibold text-lg">Account</h3>
                    <ul className="mt-2 space-y-1 text-gray-400">
                        <li>
                            <Link href={routesObject["profile"].path}>
                                My Account
                            </Link>
                        </li>
                        <li>
                            <Link href={"/login"}>
                                Login / Register
                            </Link>
                        </li>
                        <li>
                            <Link href={routesObject["cart"].path || '/profile/cart'}>
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link href={routesObject["wishlist"].path}>
                                Wishlist
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg">Quick Links</h3>
                    <ul className="mt-2 space-y-1 text-gray-400">
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>
                            <Link href={"/contact"}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Links & Download App */}
                <div>
                    <h3 className="text-white font-semibold text-lg">Social Links</h3>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-4 items-center justify-center md:justify-start w-full">
                        <Facebook className="text-gray-400 hover:text-white cursor-pointer" />
                        <Twitter className="text-gray-400 hover:text-white cursor-pointer" />
                        <Instagram className="text-gray-400 hover:text-white cursor-pointer" />
                        <Linkedin className="text-gray-400 hover:text-white cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 py-4 border-t border-gray-700">
                &copy; {currentYear} {APP_NAME}. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
