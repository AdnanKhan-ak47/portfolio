import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AboutImage from '../public/4.jpg'
type Props = {}


const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative  h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
                About
            </h3>

            <motion.div
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <Image src={AboutImage} alt="" className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[70rem] xl:h-[30rem] ' />
            </motion.div>

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold' >Here is a {" "}
                    <span className='underline decoration-[#F7AB0A]/50 ' >little</span>
                    {" "}  background
                </h4>
                <p className='text-base '>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum cumque excepturi iusto sint, modi est tempora quisquam! Facilis numquam natus tempora odio perspiciatis alias perferendis asperiores? Officia necessitatibus maxime libero possimus sit repellendus quaerat eius cupiditate odit cum molestias autem itaque velit est, rerum labore veritatis nemo voluptas vero impedit ipsum id, eos suscipit magnam. Libero obcaecati eius quod soluta?
                </p>
            </div>

        </motion.div>
    )
}

export default About