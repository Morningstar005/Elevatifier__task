import React, { useEffect } from 'react'
import Filters from './Filters'
import { useDispatch, useSelector } from 'react-redux'
import { setNews } from '../slices/FetchNewsSlices'

const Edict = () => {

  const {news,search,category} = useSelector((state)=>state.news)

  return (
    <div>
        <div className='w-full flex flex-col justify-end mx-auto mb-2 md:w-[76%] p-2 px-10 md:flex-row   '>
            <Filters/>
        </div>
        <div className='w-[80%] mx-auto h-[1px]  bg-yellow-400 mb-10 justify-center'></div>
        <div className='grid grid-cols-1 md:grid-cols-2 px-16 gap-16 gap-y-16 pb-24 w-[100%] mx-auto'>
          {
            news.filter((newsblock)=>{
              if((newsblock?.attributes.headline
                .toLowerCase()
                .includes(search.toLowerCase())||
                search === "") &&
                ( category ===""||newsblock.attributes.category === category )) {
                  return newsblock;
                }else{
                  return false
                }
            }).map((newsbox)=>(
              <div key={newsbox.id} className='flex flex-col cursor-pointer group bg-gray-100 p-3 md:w-[100%] rounded-md'>
                <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200'>
                  {
                    newsbox.attributes?.newsIcon &&(
                      <img src={newsbox?.attributes?.newsIcon} alt="post?.attributes?.category"
                      className='object-cover w-56 h-56 origin-center mx-auto lg:object-center' />
                    )
                  }
                  <div>
                    <div className='absolute bottom-0 w-full bg-opacity-70 bg-gray-800 backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                      <p>
                      {newsbox?.attributes?.headline}
                      <span>: {newsbox?.attributes?.newsSource}</span>
                      </p>
                      <p className="font-bold">
                      {new Date(newsbox?.attributes?.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">
                  {newsbox?.attributes?.hashtags}
                </p>
                <p className="text-gray-500 line-clamp-2">
                  {newsbox?.attributes?.category}
                </p>
              </div>
                <a href={newsbox?.attributes?.newsIcon} 
                className="mt-5 font-bold flex items-center group-hover:underline">
                  Read More
                </a>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Edict