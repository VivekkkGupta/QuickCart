'use client'

import Loading from '@/components/Loading/Loading'
import { useAppContext } from '@/contexts/AppContext'
import React, { useEffect } from 'react'

function page() {

    const {router } = useAppContext()

    useEffect(()=>{
       setTimeout(()=>{
        router.push("/order-place")
       },3000) 
    },[])
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'>
    <Loading/>
    redirecting to orders Page
    </div>
  )
}

export default page