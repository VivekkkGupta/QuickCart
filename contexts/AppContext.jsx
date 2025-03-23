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


    const values = {
        selectedPriceRange, setSelectedPriceRange,
        selectedCategories, setSelectedCategories,
        selectedBrands, setSelectedBrands,
        menuItems
    }
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}