import Button from '../Button/Button'
import classes from './RegForm.module.css'

export default function RegForm() {
    return(
        <form className={classes.formWrapper}>
            <h2 className={classes}>Регистрация</h2>
            <div className={classes.inputWrapper}>
                <label htmlFor="name" className={classes.label}>Имя пользователя</label>
                <input type="text" id="name" placeholder="Введите ваше имя" className={classes.input}></input>
            </div>
            <div className={classes.inputWrapper}>
                <label htmlFor="email" className={classes.label}>Почта</label>
                <input type="email" id="email" placeholder="Введите e-mail" className={classes.input}></input>
            </div>
            <div className={classes.inputWrapper}>
                <label htmlFor="phone" className={classes.label}>Телефон</label>
                <input type="tel" id="phone" className={classes.input}></input>
            </div>
            <div className={classes.inputWrapper}>
                <label htmlFor="password" className={classes.label}>Пароль</label>
                <input type="password" id="password" className={classes.input}></input>
            </div>
            <Button>Зарегистрироваться</Button>
        </form>
    )
}