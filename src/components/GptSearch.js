import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'
const GptSearch = () => {
  return (
    <div>
        <div className="absolute h-[100vh] w-[100vw] -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="bg"
        />
      </div>
        <GptSearchBar />
    </div>
  )
}

export default GptSearch