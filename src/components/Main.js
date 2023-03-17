import React, { useState } from 'react'
import CardList from './main/CardList'
import GameIntro from './main/GameIntro'
import GameIsOver from './main/GameIsOver'

export default function Main(props) {

    const [gameStarted, setGameStarted] = useState(false)
    const [gameFinished, setGameFinished] = useState(false)

    const startGame = () => {
        setGameStarted(true)
        setGameFinished(false)
    }

    return (
        <div className='main flex-col'> 
            {   
                !gameStarted ?
                    <GameIntro startGame={startGame}/> :
                        (gameFinished ? <GameIsOver /> :
                            <CardList updateCurrentScore={props.updateCurrentScore} />            
                        )
            }    
                
        </div>
    )
}
