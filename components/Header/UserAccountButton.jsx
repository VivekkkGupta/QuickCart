"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import UserDropdown from "./UserDropDown";
import { User2Icon } from "lucide-react";
import Link from "next/link";

export default function UserAccountButton() {
    const { isSignedIn, user } = useUser();

    return isSignedIn ? (
        <UserDropdown firstName={user?.firstName || ""} imageUrl={user?.imageUrl || ""} />
    ) : (
        <Link href="/sign-in">
            <User2Icon />
        </Link>
    );
}
