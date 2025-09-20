import classes from './Card.module.css'

export default function Card( {children} ) {

    // console.log(class)
    return(
        <div className={classes.cardContainer}>{children}</div>
    )
}