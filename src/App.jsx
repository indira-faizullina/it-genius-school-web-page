import Header from "./components/Header"
import Direction from "./components/Direction"
import { directions } from './data.js'

export default function App() {

  return (
    <>
    <Header/>
    <main>
      <h1>Школа программирования для детей IT Genius.</h1>
      <section>
      <h3>Направления</h3>
      {directions.map((direction, index) =>
        <Direction 
        key={index}
        title={direction.title} 
        age={direction.age} 
        description = {direction.description}
        img = {direction.img}
        />
      )}
      </section>
    </main>
    </>
  )
}
