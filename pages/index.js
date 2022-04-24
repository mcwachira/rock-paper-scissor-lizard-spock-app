import { useState } from 'react'
import classes from '../styles/Home.module.css'
import Rules from '../components/Rules.component'
export default function Home() {
  const [open, setOpen] = useState(false)

  return (

    <div className={classes.container}>




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
