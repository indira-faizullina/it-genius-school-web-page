import { nav } from '../../../data.js'
import classes from './Nav.module.css'

export default function Nav({onChange}) {

    return(
        <nav className={classes.nav}> 
        <ul className={classes.ul}>
            {nav.map((navItem, index) => <li key={index} onClick={() => onChange(navItem.page) } className={classes.li}>
                {navItem.title}
                </li>)}
        </ul>
        </nav>
    )
}