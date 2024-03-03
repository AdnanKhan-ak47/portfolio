import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ExperienceImage from "../public/2.jpg"
import pic from "../public/2.jpg"

type Props = {};

const ExperienceCard = (props: Props) => {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.div
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
            >
            <Image src={ExperienceImage} alt="" className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center " />
            </motion.div>


            <div className="px-0 md:px-10">
                <h4>CEO of </h4>
                <p>Papa bolo</p>
                <div className="flex space-x-2 my-2">
                    <Image src={pic} alt="" className="object-contain h-10 w-10 rounded-full" />
                    {/* <img className="h-10 w-10 rounded-full" src="public/1.jpg" alt="" /> */}
                    {/* Tech used */}
                    {/* Tech used */}
                    {/* Tech used */}
                </div>
                <p className="uppercase py-5 text-gray-300 ">Started work... - Ended...</p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, eligendi?</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, eligendi?</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, eligendi?</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, eligendi?</li>
                </ul>
            </div>
        </article>
    );
};

export default ExperienceCard;
