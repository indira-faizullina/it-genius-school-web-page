import logo from '/logo.svg'
import Nav from './Nav'

export default function Header() {
    return(
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <Nav />
          </ul>
          <button>Вход</button>
          
        </nav>
    )
}