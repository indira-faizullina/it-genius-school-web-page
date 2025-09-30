import Button from '../../UI/Button/Button'
import classes from './SignUp.module.css'
import { useForm } from 'react-hook-form'
import { schema } from './schemaSignUp'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '/src/firebase';
import { useNavigate } from 'react-router'

export default function SignUp() {

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

    const submitForm = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
            reset()
            navigate('/')
        })
        .catch((errors) => {
            console.log(errors)
        })
    }
    

    return(
        <form onSubmit={handleSubmit(submitForm)} className={classes.formWrapper}>
            <h2 className={classes}>Регистрация</h2>
            <div className={classes.inputWrapper}>
                <label htmlFor="name" className={classes.label}>Имя пользователя</label>
                <input {...register("userName")} type="text" id="name" placeholder="Введите ваше имя" className={classes.input}></input>
                <p className={classes.error}>{errors.userName?.message}</p>
            </div>
            <div className={classes.inputWrapper}>
                <label htmlFor="email" className={classes.label}>Почта</label>
                <input {...register("email")} type="email" id="email" placeholder="Введите e-mail" className={classes.input}></input>
                <p className={classes.error}>{errors.email?.message}</p>
            </div>
            <div className={classes.inputWrapper}>
                <label htmlFor="phone" className={classes.label}>Телефон</label>
                <input {...register("phone")} type="tel" id="phone" className={classes.input}></input>
                <p className={classes.error}>{errors.phone?.message}</p>
            </div>
            <div className={classes.inputWrapper}>
                <label htmlFor="password" className={classes.label}>Пароль</label>
                <input {...register("password")} type="password" id="password" className={classes.input}></input>
                <p className={classes.error}>{errors.password?.message}</p>
            </div>
            <Button onClick={handleSubmit(submitForm)}>Зарегистрироваться</Button>
        </form>
    )
}