import { nav } from '../data.js'

export default function Nav({onChange}) {

    return(
        <nav> 
        <ul>
            {nav.map((navItem, index) => <li key={index} onClick={() => onChange(navItem.page)}>
                {navItem.title}
                </li>)}
        </ul>
        </nav>
    )
}