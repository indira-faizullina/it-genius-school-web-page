export default function Direction({ title, age, description, img }) {
    return(
        <div>
            <h4>{title}</h4>
            <span>{age}</span>
            <p>{description}</p>
            <img src={`/${img}.jpg`} alt={`изображение направления ${title}`} />
            <button>Записаться на пробный урок</button>
        </div>
    )
}