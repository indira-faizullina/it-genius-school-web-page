import logo from '/logo.svg'
import Nav from '../Nav/Nav'
import classes from './Header.module.css'
import AuthDetails from '../../auth/AuthDetails/AuthDetails'
import { Link } from 'react-router'

export default function Header() {

    return(
        <header className={classes.header}>
          <Link to={'/'}><img className={classes.logo} src={logo} alt="logo" /></Link>
          <Nav />
          <AuthDetails />
        </header>
    )
}