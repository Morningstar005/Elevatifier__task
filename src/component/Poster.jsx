import React from 'react'

const Poster = () => {
  return (
    <div className='flex flex-col lg:flex-row  font-bold px-10 py-5 mb-2 items-center justify-center'>
        <div className='bg-[#f44336] w-[55%] p-2 px-8 py-3 flex gap-x-2 justify-around items-center rounded-md flex-wrap lg:space-x-0 '>
            <p className='md:text-sm text-lg font-normal text-white text-center'>  For the best experience, use our app on your smartphone</p>
            <div className='flex gap-x-5 flex-col md:flex-row '>
            <img
            className="w-28 h-10"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="ios"
          />
          <img
            className="w-28 h-10"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt="android"
          />
            </div>
        </div>
    </div>
  )
}

export default Poster