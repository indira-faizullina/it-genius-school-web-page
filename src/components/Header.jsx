import logo from '/logo.svg'
import Nav from './Nav'

export default function Header() {
    return(
        <header>
          <img src={logo} alt="logo" />
          <Nav />
          <button>Вход</button>
        </header>
    )
}