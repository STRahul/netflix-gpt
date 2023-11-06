import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-44 pr-5'>
        <img alt='movie_card' src={IMG_CDN_URL+ posterPath} />
    </div>
  )
}

export default MovieCard