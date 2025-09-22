import { useNavigate } from 'react-router'
import { nav } from '../../../data.js'
import classes from './Nav.module.css'

export default function Nav() {

    const navigate = useNavigate()

    return(
        <nav className={classes.nav}> 
        <ul className={classes.ul}>
            {nav.map((navItem, index) => <li key={index} onClick={() => navigate(navItem.path) } className={classes.li}>
                {navItem.title}
                </li>)}
        </ul>
        </nav>
    )
}