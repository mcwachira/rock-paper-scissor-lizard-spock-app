import { useState } from 'react'
import Head from 'next/head'
import classes from '../styles/Home.module.css'

import Header from '../components/Header.component'
import Rules from '../components/Rules.component'
export default function Home() {
  //added the score state so as to change the value of our score
  const [score, setScore] = useState(0);

  //open state will enable us to view the rules component when we click the rules button
  const [open, setOpen] = useState(false)

  return (

    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header Score={score} />




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
