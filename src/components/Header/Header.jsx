import logo from '/logo.svg'
import Nav from '../Nav/Nav'
import Button from '../Button/Button'
import classes from './Header.module.css'
import AuthDetails from '../auth/AuthDetails/AuthDetails'

export default function Header({onChange}) {

    return(
        <header className={classes.header}>
          <img className={classes.logo} src={logo} alt="logo" />
          <Nav onChange={onChange}/>
          <AuthDetails onChange={onChange}/>
        </header>
    )
}