import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <Link href="/cart" className='flex item-center gap-4'>
        <div>
            <div className="relative w-8 h-8 md:w-5h-5">
                <Image src="/cart.png" alt="" fill/>
            </div>  
        </div>
        <span> Cart (3)</span>
    </Link>
  )
}

export default CartIcon
