import React from 'react'
import GameLogo from './header/GameLogo'
import Score from './header/Score'

export default function Header(props) {
  return (
    <div className="flex header">
        <GameLogo />
        <Score 
          currentScore={props.currentScore} 
          bestScore={props.bestScore}
        />
    </div>
  )
}
