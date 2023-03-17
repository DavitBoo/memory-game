import React from 'react'

export default function Card(props) {

  const {image, onCardClick} = props

  const handleClick = () => {
    onCardClick(image)
  }

  return (
    <div className='card'>
        <img onClick={handleClick} src={`/img/cards/${image}.jpg`} alt="" />
    </div>
  )
}
