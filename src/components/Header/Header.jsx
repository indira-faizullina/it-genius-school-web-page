import logo from '/logo.svg'
import Nav from '../Nav/Nav'
import Button from '../Button/Button'
import classes from './Header.module.css'

export default function Header({onChange}) {
    return(
        <header className={classes.header}>
          <img className={classes.logo} src={logo} alt="logo" />
          <Nav onChange={onChange}/>
          <Button onClick={() => console.log('Вход')}>Вход</Button>
        </header>
    )
}