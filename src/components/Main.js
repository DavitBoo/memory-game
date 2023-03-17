import React, { useState } from 'react'
import CardList from './main/CardList'
import GameIntro from './main/GameIntro'
import GameIsOver from './main/GameIsOver'

export default function Main(props) {

    const [gameStarted, setGameStarted] = useState(false)
    const [gameFinished, setGameFinished] = useState(false)
    const [youWon, setYouWon] = useState(false)

    const startGame = () => {
        setGameStarted(true)
        setGameFinished(false)
        setYouWon(false)
    }

    const gameOver = (win = false) => {
        if(win) setYouWon(true)
        setGameFinished(true)
    }

    return (
        <div className='main flex-col'> 
            {   
                !gameStarted ?
                    <GameIntro startGame={startGame}/> :
                        (gameFinished ? <GameIsOver 
                                            startGame={startGame} 
                                            youWon={youWon}
                                        /> 
                            :<CardList 
                                updateCurrentScore={props.updateCurrentScore} 
                                resetCurrentScore={props.resetCurrentScore} 
                                gameOver={gameOver}
                            />            
                        )
            }    
                
        </div>
    )
}
