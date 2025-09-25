import { NavLink } from 'react-router'
import { nav } from '../../../data.js'
import classes from './Nav.module.css'

export default function Nav() {

    const setClassName = ({isActive}) => 
        isActive ? `${classes.navlink} ${classes.active}` : classes.navlink

    return(
        <nav className={classes.nav}> 
            {nav.map((navItem, index) => 
            <NavLink key={index} to={navItem.path} className={setClassName}>
                {navItem.title}
            </NavLink>)}
        </nav>
    )
}