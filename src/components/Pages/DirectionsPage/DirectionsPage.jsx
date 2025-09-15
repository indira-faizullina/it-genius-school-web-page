import classes from './DirectionsPage.module.css'
import { directions } from '../../../data.js'
import Button from '../../Button/Button.jsx'
import SingUpForm from '../../SingUpForm.jsx'
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
              <div className={classes.container}>
                {directions.map((direction, index) =>
                  <div key={index} className={classes.item}>
                      <h2>{direction.title}</h2>
                      <span>{direction.age}</span>
                      <p>{direction.description}</p>
                      <img style={{width: '500px'}}src={`/${direction.img}.jpg`} alt={`изображение направления ${direction.title}`} />
                      <Button onClick={() => handleClick(direction.title)}>Записаться на пробный урок</Button>
                  </div>
                )}
              </div>
          </section>
      )
    } else if(currentDirection) {
      return(
        <SingUpForm choosedDirection={currentDirection} directions={directions}/>
      )
    }
    
}