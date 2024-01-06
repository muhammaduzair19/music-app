
import React, { useState } from 'react'
import Back from '../assets/backgraphics.png'
import D1 from '../assets/d1.png'
import D2 from '../assets/d2.png'
import D3 from '../assets/d3.png'
import D4 from '../assets/d4.png'
import Exp from '../assets/Path 318.png'
import { motion } from 'framer-motion'
import SearchIcon from '../assets/search.png'
import MusicPLayer from './MusicPLayer'

import ReactVisibilitySensor from 'react-visibility-sensor'

const Search = () => {

    const [elementVisible, setElementVisible] = useState(false)

    const bg = {
        true: {
            left: '-44rem'
        },
        false: {
            right: '-50rem'
        }
    }
    const reading = {
        true: {
            left: '18rem'
        },
        false: {
            right: '16rem'
        }
    }
    const musicImg = {
        true: {
            left: '2rem'
        },
        false: {
            right: '6rem'
        }
    }



    return (
        <div className='relative h-[65rem] px-[5rem] bg-[#081730] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]'>

            <div className="left flex-1">
                <motion.img transition={{ duration: 1, type: "ease-out" }} variants={bg} animate={`${elementVisible}`} src={Back} alt="" className='absolute top-[22rem] left-[-47rem]' />
                <motion.img src={D1} alt="" className='absolute w-[16rem] top-[26rem]' />
                <motion.img src={D2} alt="" className='absolute w-[9rem] top-[32.7rem] left-[7rem]' />
                <motion.img transition={{ duration: 1.2, type: "ease-out" }} variants={reading} animate={`${elementVisible}`} src={D3} alt="" className='absolute w-[9rem] top-[33rem] left-[17rem]' />
                <motion.img transition={{ duration: 1, type: "ease-out" }} variants={musicImg} animate={`${elementVisible}`} src={D4} alt="" className='absolute w-[17rem] top-[50rem] left-[2rem]' />
            </div>


            <div className="right flex flex-col items-start justify-start flex-1 pt-[9rem] pl-[3rem]">

                {/* searchbar */}
                <div className="input flex justify-start w-[100%] items-center gap-4">
                    <input type="text"
                        placeholder='enter the keyword or url'
                        className='flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]'
                    />
                    <div className="search-icon flex flex-1 items-center rounded-xl bg-gradient-to-bl from-red-900 to-pink-700 p-4 h-[3rem]">
                        <img src={SearchIcon} alt="" className="w-[1.5rem]" />
                    </div>
                </div>


                <div className="tild flex justify-start mt-7 items-center w-[100%]">
                    <img src={Exp} alt="" className='w-[5rem]' />
                </div>

                <div className="flex flex-col mt-5 text-4xl">
                    <span>search by music</span>
                    <span>
                        <strong>name or paste url</strong>
                    </span>
                    <span className='text-sm mt-3 text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, rerum eveniet autem ipsa veritatis facere excepturi asperiores soluta in laudantium corrupti totam.
                    </span>
                </div>


                {/* music player */}
                <ReactVisibilitySensor
                    onChange={(isVisible) => setElementVisible(isVisible)}
                >
                    <MusicPLayer />
                </ReactVisibilitySensor>
            </div>
        </div>
    )
}

export default Search