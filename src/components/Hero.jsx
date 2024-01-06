import React, { useState } from 'react'
import DownloadButton from './DownloadButton'
import Background from '../assets/backgraphics.png'
import P1 from '../assets/p 1.png'
import P2 from '../assets/p 2.png'
import P3 from '../assets/p 3.png'
import P4 from '../assets/p 4.png'
import VisibilitySensor from 'react-visibility-sensor'
import { motion } from 'framer-motion'



const Hero = () => {
    const [elementVisible, setElementVisible] = useState(false)
    const bg = {
        true: {
            left: '7rem',
        },
        false: {
            left: '19rem'
        }
    }

    const MusicPlayer = {
        true: {
            left: '295px'
        },
        false: {
            left: '235px'
        }
    }
    const Rect = {
        true: {
            left: '11rem'
        },
        false: {
            left: '13rem'
        }
    }
    const Heart = {
        true: {
            left: '9rem'
        },
        false: {
            left: '12.5rem'
        }
    }


    return (
        <VisibilitySensor
            onChange={(isVisible) => setElementVisible(isVisible)}
            minTopValue={300}
        >

            <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">

                {/* left  */}
                <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">

                    <span>
                        Experience the
                    </span>
                    <span>
                        <strong>
                            best quality music
                        </strong>
                    </span>
                    <span className='text-[15px] text-gray-500'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, molestiae consequuntur.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, maiores in?
                    </span>
                    <div>
                        <span className='text-[13px]'>
                            Download now on IOS and Android
                        </span>
                        <DownloadButton />
                    </div>
                </div>


                {/* right  */}
                <div className="images relative w-[50%]">
                    <motion.img
                        variants={bg}
                        animate={`${elementVisible}`}
                        transition={{ duration: 1, type: 'ease-out' }}
                        src={Background} alt="" className='absolute top-[-8rem] left-[19rem]'

                    />



                    <motion.img
                        variants={MusicPlayer}
                        animate={`${elementVisible}`}
                        transition={{
                            duration: 1, type: 'ease-out'
                        }}
                        src={P1} alt="" className='absolute top-[-15rem] left-[13rem] h-[34rem]'
                    />


                    <motion.img
                        variants={MusicPlayer}
                        animate={`${elementVisible}`}
                        transition={{
                            duration: 1, type: 'ease-out'
                        }}
                        src={P2} alt="" className='absolute top-[94px] left-[235px] w-[175px]'
                    />

                    <motion.img
                        variants={Rect}
                        animate={`${elementVisible}`}
                        transition={{
                            duration: 1, type: 'ease-out'
                        }}
                        src={P3} alt="" className='absolute top-[13rem] left-[12rem] w-[5rem]'
                    />

                    <motion.img
                        variants={Heart}
                        animate={`${elementVisible}`}
                        transition={{
                            duration: 1, type: 'ease-out'
                        }}
                        src={P4} alt="" className='absolute top-[12rem] left-[12.5rem] w-[5rem]'
                    />


                </div>
            </div>
        </VisibilitySensor>
    )
}

export default Hero