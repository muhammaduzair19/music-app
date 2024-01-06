import React from 'react'
import Exp from '../assets/Path 318.png'
import Feature from './Feature'
import G4 from '../assets/Group 4.png'
import G2 from '../assets/Group 2.png'
import Music from '../assets/music icon.png'


const Experience = () => {
    return (
        <div className="bg-[#020917] experience flex flex-col items-center justify-start px-[5rem] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
            <img src={Exp} alt="" className='w-[5rem]' />

            <div className="headings mt-7 flex flex-col items-center text-[2rem]">
                <span>
                    <strong>music experience</strong>
                </span>
            </div>
            <div className='flex items-center justify-around mt-[6rem] w-[100%]'> 
                <Feature icon={G2} title='for live music' />
                <Feature icon={Music} title='for daily music' />
                <Feature icon={G4} title='for artists' />
            </div>
        </div>
    )
}

export default Experience