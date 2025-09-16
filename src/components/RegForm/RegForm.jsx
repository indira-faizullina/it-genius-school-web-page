import Button from '../Button/Button'
import classes from './RegForm.module.css'
import { useForm } from 'react-hook-form'
import { schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'

export default function RegForm() {

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        },
    } = useForm({
        mode: 'onBlur',
        defaultValues: [],
        resolver: yupResolver(schema)

    })

    const submitForm = (data) => {
        console.log({data})
        reset()
    }

    return(
        <form onSubmit={handleSubmit(submitForm)} className={classes.formWrapper}>
            <h2 className={classes}>Регистрация</h2>
            <div className={classes.inputWrapper}>
                <label htmlFor="name" className={classes.label}>Имя пользователя</label>
                <input {...register("userName")} type="text" id="name" placeholder="Введите ваше имя" className={classes.input}></input>
            </div>
            <div className={classes.inputWrapper}>
                <label htmlFor="email" className={classes.label}>Почта</label>
                <input {...register("email")} type="email" id="email" placeholder="Введите e-mail" className={classes.input}></input>
            </div>
            <div className={classes.inputWrapper}>
                <label htmlFor="phone" className={classes.label}>Телефон</label>
                <input {...register("phone")} type="tel" id="phone" className={classes.input}></input>
            </div>
            <div className={classes.inputWrapper}>
                <label htmlFor="password" className={classes.label}>Пароль</label>
                <input {...register("password")} type="password" id="password" className={classes.input}></input>
            </div>
            <Button onClick={handleSubmit(submitForm)}>Зарегистрироваться</Button>
        </form>
    )
}