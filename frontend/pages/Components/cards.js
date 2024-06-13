import React from 'react'

const Cards = ({name}) => {
  return (
    <div className='w-40 h-20 flex   justify-center items-center border-2 border-white '>
        <h1>{name}</h1>
    </div>
  )
}

export default Cards