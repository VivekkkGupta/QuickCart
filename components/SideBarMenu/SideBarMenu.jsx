'use client'

import React, { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useAppContext } from '@/contexts/AppContext'
import { categories, brands } from '@/data/data'

export function SideBarMenu() {

    const { selectedPriceRange, setSelectedPriceRange,
        selectedCategories, setSelectedCategories,
        selectedBrands, setSelectedBrands } = useAppContext()

    // Sample categories and brands (you can replace with your actual data)

    const handleCategoryChange = (categoryId) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        )
    }

    const handleApplyFilters = () => {
        // Handle filter application
        console.log({
            categories: selectedCategories,
            selectedPriceRange,
            brands: selectedBrands
        })
    }

    return (
        <aside className="w-64 bg-card border-r border-border p-4 h-full">
            {/* Filter Header */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
            </div>

            {/* Categories Section */}
            <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox id={category.id} />
                            <Label htmlFor={category.id} className="text-sm font-normal">
                                {category.label}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <Separator className="my-4" />

            {/* Price Range Section */}
            <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Price Range</h3>
                <Slider
                    defaultValue={[0, 1000]}
                    max={1000}
                    step={10}
                    value={selectedPriceRange}
                    onValueChange={setSelectedPriceRange}
                    className="my-4"
                />

                <div className="flex items-center justify-between text-sm">
                    <span>${selectedPriceRange[0]}</span>
                    <span>${selectedPriceRange[1]}</span>
                </div>
            </div>

            <Separator className="my-4" />

            {/* Brands Section */}
            <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Brands</h3>
                <div className="space-y-2">
                    {brands.map((brand) => (
                        <div key={brand.id} className="flex items-center space-x-2">
                            <Checkbox id={brand.id} />
                            <Label htmlFor={brand.id} className="text-sm font-normal">
                                {brand.label}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Apply Filters Button */}
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors" onClick={handleApplyFilters}>
                Apply Filters
            </button>
        </aside>
    )
}
