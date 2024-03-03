import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
};

type Props = {}

const ContactMe = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:adnankhan07666@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email} `
    };
    return (
        <div className=' h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center px-10 space-y-20 '>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl  '>
                Contact
            </h3>

            <div className=' flex flex-col space-y-10 '>
                <h4 className='text-4xl font-semibold text-center '>
                    I have got just what you need.{" "}
                    <span className=' decoration-[#F7AB0A]/50 underline '>Lets Talk.</span>
                </h4>

                <div>
                    <div className='flex items-center space-x-5 justify-center '>
                        <PhoneIcon className=' text-[#F7AB0A] h-7 w-7 animate-pulse ' />
                        <p className=' text-2xl '>+54684621346</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center '>
                        <EnvelopeIcon className=' text-[#F7AB0A] h-7 w-7 animate-pulse ' />
                        <p className=' text-2xl '>adnankhan07666@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center '>
                        <MapPinIcon className=' text-[#F7AB0A] h-7 w-7 animate-pulse ' />
                        <p className=' text-2xl '>123 Developer Gully</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col space-y-2 w-fit mx-auto '>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactinput' type="text" ></input>
                        <input {...register('email')} placeholder='Email' className='contactinput' type="email" ></input>
                    </div>

                    <input {...register('subject')} placeholder='Subject' className='contactinput' type="text" />

                    <textarea {...register("message")} placeholder='Message' className='contactinput' name="" id=""></textarea>
                    <button type='submit' className=' bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg '>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe