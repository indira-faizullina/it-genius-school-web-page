import Button from "./Button/Button"

export default function Direction({ title, age, description, img }) {
    const handleClick = (title) => console.log(title)
    
    return(
        <div>
            <h4>{title}</h4>
            <span>{age}</span>
            <p>{description}</p>
            <img src={`/${img}.jpg`} alt={`изображение направления ${title}`} />
            <Button onClick={()=> handleClick({title})}>Записаться на пробный урок</Button>
        </div>
    )
}