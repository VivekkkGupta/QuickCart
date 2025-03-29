'use client'

import { createContext, useContext, Provider } from "react"
import { useState } from "react"

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({ children }) => {

    // Sidebar
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedBrands, setSelectedBrands] = useState([])

    // Header
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Category", path: "/category" }
    ]

    const routesObject = {
        "profile": { name: "Personal Details", path: "/profile/personal-details" },
        "address": { name: "Address Details", path: "/profile/address-details" },
        "payment": { name: "Payment Options", path: "/profile/payment-options" },
        "orders": { name: "Orders History", path: "/profile/orders-history" },
        "returns": { name: "Return History", path: "/profile/return-history" },
        "wishlist": { name: "Wishlist", path: "/profile/wishlist" },
        "cart": { name: "Cart", path: "/profile/cart" },
        "sign-in": { name: "Sign In", path: "/sign-in" },
        "sign-up": { name: "Sign Up", path: "/sign-up" },
        "home": { name: "Home", path: "/" },
    }


    const values = {
        selectedPriceRange, setSelectedPriceRange,
        selectedCategories, setSelectedCategories,
        selectedBrands, setSelectedBrands,
        menuItems, routesObject
    }
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}