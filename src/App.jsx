import Header from "./components/Header"
import Direction from "./components/Direction"
import Button from "./components/Button/Button.jsx"
import { directions } from './data.js'
import { useState } from "react"

export default function App() {

  const [content, useContent] = useState('main')

  const handleClick = function(title) {
    useContent(title)
  }

  if(content === 'main') {
    return (
        <>
        <Header/>
        <main>
          <h1>Школа программирования для детей IT Genius.</h1>
          <section>
          <h3>Направления</h3>
          {directions.map((direction, index) =>
            <div key={index}>
              <Direction 
              title={direction.title} 
              age={direction.age} 
              description = {direction.description}
              img = {direction.img}
              />
              <Button onClick={() => handleClick(direction.title)}>Записаться на пробный урок</Button>
            </div>
          )}
          </section>
        </main>
        </>
      )
      } else {
        return(
          <>
          <Header/>
          <div>
            <h1>{content}</h1>
          </div>
          </>
        )
      }
  
}
