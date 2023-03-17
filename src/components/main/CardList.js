import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function CardList(props) {

  const {updateCurrentScore,resetCurrentScore, gameOver} = props

  const [randomCard, setRandomCard] = useState([
    {imgName:1, touched: false, placeName: 'Santorini' },
    {imgName:2, touched: false, placeName: 'Granada' },
    {imgName:3, touched: false, placeName: 'San Sebastian'},
    {imgName:4, touched: false, placeName: 'Alps'},
    {imgName:5, touched: false, placeName: 'Rhodes'},
    {imgName:6, touched: false, placeName: 'Athens'},
    {imgName:7, touched: false, placeName: 'Girona'},
    {imgName:8, touched: false, placeName: 'Bilbao'},
    {imgName:9, touched: false, placeName: 'Slovenia'},
    {imgName:10, touched: false, placeName: 'Venice (Los Angeles)'},
    {imgName:11, touched: false, placeName: 'Cologne'},
    {imgName:12, touched: false, placeName: 'Vitoria-Gasteiz'},
    {imgName:13, touched: false, placeName: 'Florence'},
    {imgName:14, touched: false, placeName: 'Costa Brava'},
    {imgName:15, touched: false, placeName: 'Venice'},
    {imgName:16, touched: false, placeName: 'Meteora'},
    {imgName:17, touched: false, placeName: 'Salto del Nervión'},
    {imgName:18, touched: false, placeName: 'Vitoria-Gasteiz (Virgen Blanca)'},
    {imgName:19, touched: false, placeName: 'Griffith Observatory'},
    {imgName:20, touched: false, placeName: 'Burgos'}
  ])

  useEffect(() => {
    // Mezcla los elementos aleatoriamente y actualiza el state
    console.log(randomCard)
    if(randomCard.find(element => element.touched === false) === undefined){
      gameOver(true);
    }

    setRandomCard((array) => {
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
      console.log(stateArr)
      return stateArr.map(card => {
        if (card.imgName === imgName) {
          if(!card.touched){
            updateCurrentScore();
            return {
              ...card,
              touched: true
            };
          }else{
            resetCurrentScore();
            gameOver();
          }
          
        }
        return card;
      });
    });
  };

  return (
    <div className='flex-wrap'>
      {randomCard.map(card => <Card key={card.imgName} image={card.imgName} onCardClick={setNewArray} placeName={card.placeName}/>)}
    </div>
  )
}
