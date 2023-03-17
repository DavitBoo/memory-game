import React from 'react'

export default function Card() {
  const random = Math.floor(Math.random() * 20) + 1
  return (
    <div className='card'>
        <img src={`/img/cards/${random}.jpg`} alt="" />
    </div>
  )
}
