import React from 'react'
import CardList from './main/CardList'
import GameIntro from './main/GameIntro'
import GameIsOver from './main/GameIsOver'

export default function Main() {
    return (
        <div className='main flex-col'> 
            <GameIntro />
            <CardList />            
            <GameIsOver />
        </div>
    )
}
