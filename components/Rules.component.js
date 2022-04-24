
import Image from 'next/image'
import classes from '../styles/Rules.module.css'
const Rules = ({ open, setopen }) => {

    return (

        <>


            {open && (
                <div className={classes.rules} onClick={() => setopen()}>

                    <div className={classes.title}>
                        <h1>
                            Rules</h1>
                        <Image src='/images/icon-close.svg' alt='close' height='5' width='30' />
                    </div>

                    <div className={classes.image}>
                        <Image src='/images/image-rules-bonus.svg' alt='rules' layout='fill' />
                    </div>

                </div>
            )}

        </>

    )
}

export default Rules