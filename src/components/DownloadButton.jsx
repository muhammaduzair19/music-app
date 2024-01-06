import React from 'react'
import Apple from '../assets/apple.png'
import Play from '../assets/google.png'

const DownloadButton = () => {

  const imageStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'
  return (
    <div className="download">
      <div className="images flex gap-6">

        <img
          src={Apple}
          alt=""
          className={imageStyle}
        />


        <img
          src={Play}
          alt=""
          className={imageStyle}
        />


      </div>
    </div>
  )
}

export default DownloadButton