import logo from '/logo.svg'
import Nav from '../Nav/Nav'
import classes from './Header.module.css'
import AuthDetails from '../../auth/AuthDetails/AuthDetails'

export default function Header() {

    return(
        <header className={classes.header}>
          <img className={classes.logo} src={logo} alt="logo" />
          <Nav />
          <AuthDetails />
        </header>
    )
}