import React from 'react'
import CenterMenu from './CenterMenu'
import { Facebook, YouTube, LinkedIn, Twitter } from '@mui/icons-material';


const Footer = () => {
    const IconStyle = 'rounded-full border-2 border-white p-2 mr-[5rem] '
    return (
        <div className='footer flex flex-col items-center justify-start px-[5rem] h-[45rem] bg-[#081730] pt-[18rem] mt-[-10rem] relative z-[-1] '>
            <CenterMenu />
            <div className="flex w-[100%] justify-center mt-14">

                <div className={IconStyle} >
                    <Facebook />
                </div>
                <div className={IconStyle} >
                    <Twitter />
                </div>
                <div className={IconStyle} >
                    <YouTube />
                </div>
                <div className={IconStyle} >
                    <LinkedIn />
                </div>
            </div>

            <span className='text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet inventore sunt dignissimos praesentium harum, temporibus obcaecati, placeat sapiente autem assumenda mollitia cumque possimus eligendi aperiam vero illum eius alias repellat soluta. Voluptas, exercitationem.</span>
        </div>
    )
}

export default Footer