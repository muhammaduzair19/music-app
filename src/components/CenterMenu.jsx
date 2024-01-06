import React from 'react'

const CenterMenu = () => {
    const ListStyle = "mr-[3rem] hover:cursor-pointer"
    return (
        <div className='menu flex text-white'>
            <ul className='flex w-[100%] justify-between '>
                <li className={ListStyle} >Home</li>
                <li className={ListStyle} >About</li>
                <li className={ListStyle} >Perfromer</li>
                <li className={ListStyle} >Event Schedule</li>
            </ul>
        </div>
    )
}

export default CenterMenu