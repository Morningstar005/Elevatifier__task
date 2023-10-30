// import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { newsfetch } from './services/newsfetch'
import { Edict, Footer, Navbar, Poster } from './component'


const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(newsfetch())
  },[])
  // console.log('newsss',news)
    return (
      <div className='max-w-10xl mx-auto'>
        <Navbar/>
        <Poster/>
        <Edict/>
        <Footer/>
      </div>
  )
}

export default App