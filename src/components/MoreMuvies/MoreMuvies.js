import React from 'react'
import './MoreMuvies.css'

const MoreMuvies = ({ addMovies }) => {
  return (
    <div className='more-muvies'>
      <button onClick={() => addMovies()} className="more-muvies__button">Еще</button>
    </div>
  )
};

export default MoreMuvies
