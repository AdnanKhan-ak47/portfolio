import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 '>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center'>
                {/* Social Icons */}
                <SocialIcon
                    url="https://www.linkedin.com/in/adnankhan-ak/"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://www.instagram.com/adnankhan.a.k"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://twitter.com/adnankhan_a_k"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://codeforces.com/profile/AdnanKhan-ak47"
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
            >
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <Link href="#contact">
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
                </Link>
            </motion.div>
        </header>
    )
}

export default Header