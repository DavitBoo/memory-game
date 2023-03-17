import React from 'react'

export default function Score(props) {
  const {currentScore, bestScore} = props

  return (
    <div class="flex score">
        <h2>Current Scrore <span>{currentScore}</span></h2>
        <h2>Best Scrore<span>{bestScore}</span></h2>
    </div>
  )
}
