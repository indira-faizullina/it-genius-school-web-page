import logo from '/logo.svg'
import Nav from './Nav'
import Button from './Button/Button'

export default function Header({onChange}) {
    return(
        <header className='header'>
          <img className='logo' src={logo} alt="logo" />
          <Nav onChange={onChange}/>
          <Button onClick={() => console.log('Вход')}>Вход</Button>
        </header>
    )
}