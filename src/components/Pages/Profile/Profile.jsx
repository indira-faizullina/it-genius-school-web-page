import classes from './Profile.module.css'

export default function Profile() {
    return(
        <div className={classes.container}>
            <h1>Личный кабинет</h1>
            <div>
                <h3>Мои занятия:</h3>
                <p>Minecraft</p>
                <table className={classes.table}>
                    <caption>Расписание занятий</caption>
                    <tbody>
                    <tr>
                        <th className={classes.td}>День недели</th>
                        <td className={classes.td}>пн</td>
                        <td className={classes.td}>вт</td>
                        <td className={classes.td}>ср</td>
                        <td className={classes.td}>чт</td>
                        <td className={classes.td}>пт</td>
                        <td className={classes.td}>сб</td>
                        <td className={classes.td}>вс</td>
                    </tr>
                    <tr>
                        <th className={classes.td}>Время</th>
                        <td className={classes.td}></td>
                        <td className={classes.td}>13:00 - 14:00</td>
                        <td className={classes.td}></td>
                        <td className={classes.td}></td>
                        <td className={classes.td}>17:45 - 18:45</td>
                        <td className={classes.td}></td>
                        <td className={classes.td}></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h3>Наставник</h3>
                <p>Имя: Сергей Кузнецов</p>
                <p>Номер телефона: 89374585475</p>
            </div>
        </div>
    )
}