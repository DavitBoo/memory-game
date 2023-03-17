import React from 'react'

export default function GameIsOver(props) {

  const {startGame, youWon} = props

  return (
    <div className='game-over'>
        <h3>{youWon ? 'Wow! You visited all of them, congratulations!' : 'You have visited this place twice.'}</h3>
        <hr />
        <h3>Try it again and try visit all of them</h3>

        <button onClick={startGame}>Play again!</button>
    </div>
  )
}
