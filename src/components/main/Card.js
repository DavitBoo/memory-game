import React from 'react'

export default function Card(props) {

  const {image, onCardClick} = props

  return (
    <div className='card'>
        <img onClick={onCardClick} src={`/img/cards/${image}.jpg`} alt="" />
    </div>
  )
}
