import logo from '/logo.svg'
import Nav from './Nav'
import Button from './Button/Button'

export default function Header() {
    return(
        <header>
          <img src={logo} alt="logo" />
          <Nav />
          <Button onClick={() => console.log('Вход')}>Вход</Button>
        </header>
    )
}