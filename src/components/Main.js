import React from 'react'
import CardList from './main/CardList'
import GameIntro from './main/GameIntro'
import GameIsOver from './main/GameIsOver'

export default function Main() {
    return (
        <div>
            <GameIntro />
            <CardList />            
            <GameIsOver />
        </div>
    )
}
