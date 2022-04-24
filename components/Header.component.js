import classes from '../styles/Header.module.css'
import Image from 'next/image'
import { Fragment, useEffect } from 'react'
import HeaderIcon from '../public/images/logo.svg'

const Header = ({ Score }) => {
    return (
        <Fragment>
            <div className={classes.scoreBoard}>

                <Image src={HeaderIcon} alt='header icon' layout='fixed' />
                <div className={classes.score}>
                    <h2>
                        Score
                    </h2>
                    <span className={classes.scoreValue}>
                        {Score}
                    </span>
                </div>
            </div>
        </Fragment>
    )
}
export default Header;