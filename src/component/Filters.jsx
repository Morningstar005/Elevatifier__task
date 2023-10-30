import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSearch } from '../slices/FetchNewsSlices'

const Filters = () => {
  const dispatch = useDispatch()
  const { search, category, news } = useSelector((state) => state.news)

  const searchDispatch = (e) => {
    dispatch(setSearch(e))
  }
  const categoryDispatch = (e) => {
    console.log(e)
    dispatch(setCategory(e))
  }
 
  return (
    <div className='flex flex-col md:flex-row gap-y-2 w-[50%] md:w-full mx-auto md:mx-0 gap-x-2'>
      <input
        className="w-full h-[38px] pl-12 p-4 bg-gray-200 rounded-l-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        type="text"
        value={search}
        placeholder='Search Here'
        onChange={(e) => {
          searchDispatch(e.target.value)
        }} />

      <select
        className='px-2 bg-gray-200 rounded-r-lg outline-none'
        name="Category"
        id="category"
        value={category}
        onChange={(e) => {
          categoryDispatch(e.target.value)
        }}
      >
        <option value="">Choose Category</option>
        {
          news.map((newcate) => (
            <option key={newcate.id} value={newcate.attributes?.category}>{newcate.attributes?.category}
            </option>
          ))}
      </select>
    </div>
  )
}

export default Filters