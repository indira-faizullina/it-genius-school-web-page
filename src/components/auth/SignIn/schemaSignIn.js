import * as yup from 'yup';

const regExpEmail = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)

export const schema = yup.object().shape({
    email: yup.string().trim().required('Поле обязательно для заполнения').matches(regExpEmail, 'Неверный формат почты'),
    password: yup.string().trim().required('Поле обязательно для заполнения').min(6, 'Не менее 6 символов')
})

