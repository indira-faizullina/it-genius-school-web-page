import { directions } from '../../data.js'
import Button from '../Button/Button.jsx'
import SingUpForm from '../SingUpForm.jsx'
import { useState } from "react"

export default function DirectionsPage() {
    
    const [currentDirection, useCurrentDirection] = useState('')
    
      const handleClick = function(title) {
        useCurrentDirection(title)
      }
    
    if(!currentDirection) {
      return(
          <section>
              <h1>Наши направления</h1>
                {directions.map((direction, index) =>
                  <div key={index}>
                      <h4>{direction.title}</h4>
                      <span>{direction.age}</span>
                      <p>{direction.description}</p>
                      <img src={`/${direction.img}.jpg`} alt={`изображение направления ${direction.title}`} />
                      <Button onClick={() => handleClick(direction.title)}>Записаться на пробный урок</Button>
                  </div>
                )}
          </section>
      )
    } else if(currentDirection) {
      return(
        <SingUpForm chooseDirection={currentDirection} directions={directions}/>
      )
    }
    
}