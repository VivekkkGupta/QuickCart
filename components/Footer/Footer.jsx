import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full h-12 bg-slate-800 text-white flex items-center justify-center py-4 text-sm'>
            <p>@QuickCart {currentYear} | All Rights Reserved</p>
        </footer>
    )
}

export default Footer
