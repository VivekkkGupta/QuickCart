import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function LogoSection() {
  return (
    <div>
        <Link
          href={"/home"}
          className="flex gap-2 items-end justify-center tracking-tighter"
        >
          <Image
            src={"/images/logos/logo.svg"}
            alt="logo"
            width={30}
            height={30}
          />
          <h2 className="font-bold text-xl">Quick Cart</h2>
        </Link>
      </div>
  )
}

export default LogoSection