import Card from '../../UI/Card/Card'
import classes from './ProjectsPage.module.css'
import { useEffect, useState } from "react"
import { Link } from 'react-router'

export default function ProjectsPage() {

const [projects, setProjects] = useState([])  
const [loading, setLoading] = useState(false)

useEffect(() => {
    async function fetchProjects() {
    setLoading(true)
    const response = await fetch('https://my-json-server.typicode.com/indira-faizullina/fake-api-for-IT-genius-school/projects/')
    const data = await response.json()
    setProjects(data)
    setLoading(false)
}

    fetchProjects()
}, [])

    return(
        <>
        <h1>Проекты наших студентов</h1>
        <div className={classes.container}>
        {loading && <p>Loading...</p>}
        {!loading && projects.map((project, i) => (
            <Card key={i}>
                <Link to={`/projects/${project.id}`}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <img src={project.img} alt="" />
                    <p>{project.author}</p>
                </Link>
            </Card>
        ))}
        </div>
        </>
    )
}