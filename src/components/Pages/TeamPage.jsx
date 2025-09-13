import { useEffect, useState } from "react"

export default function TeamPage() {

const [persons, setPersons] = useState([])  
const [loading, setLoading] = useState(false)

useEffect(() => {
    async function fetchPersons() {
    setLoading(true)
    const response = await fetch('https://my-json-server.typicode.com/indira-faizullina/fake-api-for-IT-genius-school/persons/')
    const data = await response.json()
    setPersons(data)
    setLoading(false)
}

    fetchPersons()
}, [])

    return(
        <>
        <h1>Наша команда</h1>
        {loading && <p>Loading...</p>}
        {!loading && persons.map((person, i) => (
            <div key={i}>
                <img src={person.photo} alt="" />
                <h3>{person.name}</h3>
                <p>{person.description}</p>
            </div>
        ))}
        </>
    )
}