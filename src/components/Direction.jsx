import Button from "./Button/Button"

export default function Direction({ title, age, description, img }) {
    return(
        <div>
            <h4>{title}</h4>
            <span>{age}</span>
            <p>{description}</p>
            <img src={`/${img}.jpg`} alt={`изображение направления ${title}`} />
            <Button>Записаться на пробный урок</Button>
        </div>
    )
}