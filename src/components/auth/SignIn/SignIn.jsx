import Button from '../../UI/Button/Button'
import classes from './SignIn.module.css'
import { useForm } from 'react-hook-form'
import { schema } from './schemaSignIn'
import { yupResolver } from '@hookform/resolvers/yup'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function SignIn() {

    const [isError, setIsError] = useState(false)
    const navigate = useNavigate()

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

    const logIn = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((user) => {
            reset()
            setIsError(false)
            navigate('/')
        })
        .catch(() => setIsError(true))
    }

    return(
        <>
        <form onSubmit={handleSubmit(logIn)} className={classes.formWrapper}>
            <h2 className={classes}>Вход</h2>
            <div className={classes.inputWrapper}>
                <label htmlFor="email" className={classes.label}>Почта</label>
                <input {...register("email")} type="email" id="email" placeholder="Введите e-mail" className={classes.input}></input>
                <p className={classes.error}>{errors.email?.message}</p>
            </div>
            <div className={classes.inputWrapper}>
                <label htmlFor="password" className={classes.label}>Пароль</label>
                <input {...register("password")} type="password" id="password" className={classes.input}></input>
                <p className={classes.error}>{errors.password?.message}</p>
            </div>
            <Button onClick={() => handleSubmit(logIn)}>Войти</Button>
            {isError && <p className={classes.error}>Неверный email или пароль</p>}
        </form>
        <div>
            <p>Нет аккаунта? <span className={classes.link} onClick={() => navigate('/signup')}>Зарегистрируйтесь</span></p>
        </div>
        </>

    )
}