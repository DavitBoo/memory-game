import React from 'react'

export default function Card(props) {

  const {image, placeName, onCardClick} = props

  const handleClick = () => {
    console.log(image)
    onCardClick(image)
  }

  return (
    <div className='card'>
        <img onClick={handleClick} src={`/img/cards/${image}.jpg`} alt="" />
        <div onClick={handleClick} className='imgInfo'><p>{placeName}</p></div>
    </div>
  )
}
