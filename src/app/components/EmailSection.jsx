"use client";
import React from 'react'
import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image"

export const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>
                    Let's Connect
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-x-md'>
                    {" "}
                    I'm actively seeking new opportunities, and my inbox is eagerly waiting for your message. Whether you have a question or just want to drop a friendly 'hi', I'll make sure to get back to you promptly! Your thoughts and inquiries are always welcomed.
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="github.com">
                        <Image src={GithubIcon} alt='GitHub Icon' />
                    </Link>
                    <Link href="linkedin.com">
                        <Image src={LinkedinIcon} alt='Linkedin Icon' />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col'>
                    <div className='mb-6'>
                        <label
                        htmlFor='email'
                        className='text-white block mb-2 text-sm font-medium'>
                        Your email
                    </label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        required
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='jeniyaguana@gmail.com'
                    />
                    </div>
                    <div className='mb-6'>
                        <label
                        htmlFor='subject'
                        className='text-white block mb-2 text-sm font-medium'>
                        Subject
                    </label>
                    <input
                        name='subject'
                        type='text'
                        id='subject'
                        required
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Hello from my side of the screen'
                    />
                    </div>
                    <div className='mb-6'>
                        <label
                        htmlFor='message'
                        className='text-white block mb-2 text-sm font-medium'>
                        Message
                    </label>
                    <textarea
                        name='message'
                        type='text'
                        id='message'
                        required
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Let's talk about..."
                    />
                    </div>
                    <button
                        type='submit'
                        className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                        </button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection;
