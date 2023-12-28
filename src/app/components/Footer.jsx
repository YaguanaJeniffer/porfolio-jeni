import React from 'react'
import Image from "next/image";
import logoImage from "../../../public/images/logo-JeniCode.png";

export const Footer = () => {
    return (
        <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
            <div className='container p-12 flex justify-between'>
                <span>
                    <a className='cursor-pointer'>
                        <Image src={logoImage} alt="Logo" width={100} height={100} />
                    </a>
                </span>
                <p className='text-slate-600'>All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;
