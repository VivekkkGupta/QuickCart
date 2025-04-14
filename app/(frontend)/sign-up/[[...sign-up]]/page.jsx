'use client'
import { SignUp, useUser } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
    const { isLoaded } = useUser()
    return (
        <div className='flex w-full items-center justify-center max-w-[1240px] mx-auto'>
            <div className='w-1/2 hidden md:block  overflow-hidden'>
                <Image src={'/authImages/auth-page-image.png'} width={600} height={100} alt='Quick-Cart-Auth-Image' />
            </div>
            <div className='md:w-1/2 w-full flex items-center justify-center'>
                {
                    !isLoaded ? (
                        <div className="w-[400px] h-[580px] bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse flex flex-col gap-4 p-6">
                            <div className="h-10 w-3/4 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                            <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                            <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                            <div className="h-10 w-1/2 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                        </div>
                    ) : (
                        <SignUp signInUrl="/sign-in" />
                    )
                }
                {/* <form onSubmit={handleSignIn}>
                </form> */}
            </div>
        </div>
    )
}