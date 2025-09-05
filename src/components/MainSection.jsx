import Direction from "./Direction.jsx"
import Button from "./Button/Button.jsx"
import { directions } from '../data.js'
import { useState } from "react"

export default function MainSection() {
    const [content, useContent] = useState('main')
    
      const handleClick = function(title) {
        useContent(title)
      }
    
      if(content === 'main') {
        return (
            <main>
              <h1>Школа программирования для детей IT Genius.</h1>
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
            </main>
          )
          } else {
            return(
              <main>
                <h1>{content}</h1>
              </main>
            )
          }
}