import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'
const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
        <img
          className="w-screen h-screen object-cover"
          src={BG_URL}
          alt="bg"
        />
      </div>
        <GptSearchBar />
    </div>
  )
}

export default GptSearch