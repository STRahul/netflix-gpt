import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-44 mr-6 hover:scale-110 transition-all ease-in-out duration-150'>
        <img alt='movie_card' src={IMG_CDN_URL+ posterPath} />
    </div>
  )
}

export default MovieCard