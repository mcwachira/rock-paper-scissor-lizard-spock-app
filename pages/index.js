import { useState } from 'react'
import Head from 'next/head'
import classes from '../styles/Home.module.css'

import Header from '../components/Header.component'
import Hands from '../components/Hands.component'
import Game from '../components/Game.component'
import Rules from '../components/Rules.component'
export default function Home() {
  //added the score state so as to change the value of our score
  const [score, setScore] = useState(0);

  //open state will enable us to view the rules component when we click the rules button
  const [open, setOpen] = useState(false)

  //added the my choice state to store the hand the user chooses during playing 
  const [myChoice, setMyChoice] = useState(-1);


  return (

    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header Score={score} />

      {/* conditional rendering of the game component and hands component based on the value of myChoice */}
      {myChoice >= 0 ? (
        <Game myChoice={myChoice} Score={score} setScore={setScore} setMyChoice={(choice) => setMyChoice(choice)} />
      ) : (
        <Hands setChoice={(value) => setMyChoice(value)} />
      )
      }



      <footer className={classes.footer}>

        <div className={classes.rules} onClick={() => setOpen(!open)}>
          Rules
        </div>
      </footer>

      <Rules
        open={open}
        setopen={() => setOpen(!open)}
      />
    </div>
  )
}
