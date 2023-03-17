import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function CardList(props) {

  const {updateCurrentScore} = props

  const [randomCard, setRandomCard] = useState([
    {imgName:1, touched: false},
    {imgName:2, touched: false},
    {imgName:3, touched: false},
    {imgName:4, touched: false},
    {imgName:5, touched: false},
    {imgName:6, touched: false},
    {imgName:7, touched: false},
    {imgName:8, touched: false},
    {imgName:9, touched: false},
    {imgName:10, touched: false},
    {imgName:11, touched: false},
    {imgName:12, touched: false},
    {imgName:13, touched: false},
    {imgName:14, touched: false},
    {imgName:15, touched: false},
    {imgName:16, touched: false},
    {imgName:17, touched: false},
    {imgName:18, touched: false},
    {imgName:19, touched: false},
    {imgName:20, touched: false}
  ])

  useEffect(() => {
    // Mezcla los elementos aleatoriamente y actualiza el state
    setRandomCard((array) => {
      console.log(array)
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    });
  }, [randomCard]);

  const setNewArray = (imgName) => {
    setRandomCard((stateArr) => {
      return stateArr.map(card => {
        if (card.imgName === imgName) {
          if(!card.touched){
            card.touched = true;
            updateCurrentScore();
          }
          
        }
        return card;
      });
    });
  };

  return (
    <div className='grid'>
      {randomCard.map(card => <Card key={card.imgName} image={card.imgName} onCardClick={setNewArray}/>)}
    </div>
  )
}
