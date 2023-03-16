import React from 'react'

export default function GameIsOver() {
  return (
    <div className='game-over'>
        <h3>You have visited this place twice.</h3>
        <hr />
        <h3>Try it again and try visit all of them</h3>

        <button>Play again!</button>
    </div>
  )
}
