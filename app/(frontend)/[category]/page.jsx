"use client"
import axios from 'axios';
import React,{use,useEffect} from 'react'
import { toast } from 'sonner';

function page({ params }) {
    const { category } = use(params);

    const fetchProductsFromCategory = async()=>{
        try {
            const {data} = axios.post("/api/get-category-products",{categoryname: category})
            console.log(data)
            toast.success("Fetched the Products")
        } catch (error) {
            toast.error("No Products with This category")            
        }
    }

    useEffect(() => {
        fetchProductsFromCategory()
    }, [])
    

    return (
        <>
            
        </>
    )
}

export default page