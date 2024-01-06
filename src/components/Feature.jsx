import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { motion } from 'framer-motion'


const Feature = ({ icon, title }) => {
    const [elementVisible, setElementVisible] = useState(false)

    const variants = {
        true: {
            transform: 'scale(1)'
        },
        false: {
            transform: "scale(0.5)"
        }
    }


    return (
        <VisibilitySensor
            onChange={(isVisible) => setElementVisible(isVisible)}
        >

            <div className='flex flex-col justify-center items-center mx-12 text-center'>

                <motion.div
                    variants={variants}
                    animate={`${elementVisible}`}
                    transition={{
                        duration: 1, type: 'ease-out'
                    }}
                    className="icon bg-[#081730]  rounded-2xl p-4">
                    <img src={icon} alt="" className='w-[3rem]' />
                </motion.div>


                <span className='mt-5'>
                    {title}
                </span>
                <span className='text-gray-500 mt-4 text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam voluptatum, sequi ea corporis praesentium enim nemo officia repellendus neque accusantium velit.
                </span>
                <span className='text-pink-500 underline mt-[3rem] hover:cursor-pointer' >learn more</span>
            </div>
        </VisibilitySensor>
    )
}

export default Feature