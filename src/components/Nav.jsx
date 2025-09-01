import {nav} from '../data.js'

export default function Nav() {
    return(
        <nav>
            
        <ul>
            {nav.map(navItem => <li id={navItem.title}><a href={navItem.link}>{navItem.title}</a></li>)}
        </ul>
        </nav>
    )
}