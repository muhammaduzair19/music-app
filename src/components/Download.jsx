import React from 'react'
import Path from '../assets/Path 318.png'
import DownloadButton from './DownloadButton'


const Download = () => {
    return (
        <div className='flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[48rem] mt-[-10rem] pt-[18rem] relative z-[0] rounded-b-[5rem]'>
            <img src={Path} alt="" className='h-[1rem]' />
            <div className='flex mt-7 flex-col items-center text-[2rem]'>
                <span>download the best music</span>
                <span>
                    <strong>app now!</strong>
                </span>
                <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[1rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsam labore alias ducimus autem corporis unde, consequatur veniam illo nulla asperiores, pariatur nemo? Labore, ab velit cum quidem error tempora repudiandae. Dolorem, nulla.
                </span>
            </div>
            <div className='mt-14'>
                <DownloadButton/>
            </div>

        </div>
    )
}

export default Download