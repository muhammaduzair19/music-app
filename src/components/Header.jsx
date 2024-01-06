import React from 'react'
import Logo from "../assets/MuzicLogo.png"
import CenterMenu from './CenterMenu'

const Header = () => {

    const buttonStyle = "border-[2px] rounded-[10px] border-[#232A4E] px-[25px]"
    return (
        <div className="header bg-[#081730] flex items-center justify-between px-[4rem] pt-[2.5rem] text-[0.8rem]">

            {/* Logo  */}
            <img src={Logo} alt="" className="w-[42px] h-[42px]" />

            {/* center menu  */}
            <CenterMenu />


            {/* buttons  */}
            <div className="buttons flex">
                <button className={buttonStyle + `   mr-9 hover:bg-[#232A4E] `} > Login</button>
                <button className={buttonStyle + ` bg-[#232A4E]`} > Signup</button>
            </div>
        </div>
    )
}

export default Header