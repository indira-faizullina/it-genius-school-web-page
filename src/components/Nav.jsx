const nav = [
    {
        title: 'Направления',
        link: '#directions',
    },
    {
        title: 'Проекты студентов',
        link: '#projects',
    },
    {
        title: 'Наша команда',
        link: '#team',
    },
    {
        title: 'Цена',
        link: '#price',
    },
    {
        title: 'Отзывы',
        link: '#reviews',
    }
]

export default function Nav() {
    return(
        <li>
            <a href={nav.map(navItem => navItem.link)}>{nav.map(navItem => navItem.title)}</a>
        </li>
    )
    
}