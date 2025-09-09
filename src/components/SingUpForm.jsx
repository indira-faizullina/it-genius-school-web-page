export default function SingUpForm({ chooseDirection, directions} ) {
    return (
        <form>
            <label htmlFor="name">Ваше имя</label>
            <input type="text" id="name"/>
            <label htmlFor="tel">Телефон для связи</label>
            <input type="tel" id="tel" />
            <select defaultValue={chooseDirection}>
                {directions.map((dir, i) => <option key={i} value={dir.title}>{dir.title}</option>)}
            </select>
        </form>
    )
}