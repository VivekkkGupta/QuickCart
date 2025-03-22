'use client'

import { createContext, useContext, Provider } from "react"
import { useState } from "react"

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({ children }) => {

    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedBrands, setSelectedBrands] = useState([])

    const values = {
        selectedPriceRange, setSelectedPriceRange,
        selectedCategories, setSelectedCategories,
        selectedBrands, setSelectedBrands
    }
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}