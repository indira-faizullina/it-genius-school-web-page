import classes from './DirectionsPage.module.css'
import { directions } from '../../../data.js'
import CallBackForm from '../CallBackForm.jsx'
import Card from '../../UI/Card/Card.jsx'
import Button from '../../UI/Button/Button.jsx'
import { useState } from "react"
import { useNavigate } from 'react-router'


export default function DirectionsPage() {
    
    const [currentDirection, setCurrentDirection] = useState('')

    const navigate = useNavigate()
    
    const handleClick = function(title) {
      setCurrentDirection(title)
      navigate('/callback', {
          state: {
            choosedDirection: {currentDirection}, 
            directions: {directions}
        }
      }
      )
    }

    if(currentDirection) {
      return(
        <CallBackForm />
      )
    }
      return(
          <section>
              <h1>Наши направления</h1>
              <div className={classes.container}>
                {directions.map((direction, index) =>
                  <Card key={index}>
                      <h2>{direction.title}</h2>
                      <span>{direction.age}</span>
                      <div className={classes.itemText}>
                      <p>{direction.description}</p>
                      </div>
                      <img className={classes.itemImg} src={`/${direction.img}.jpg`} alt={`изображение направления ${direction.title}`} />
                      <Button onClick={() => handleClick(direction.title)}>Записаться на пробный урок</Button>
                  </Card>
                )}
              </div>
          </section>
      ) 
}