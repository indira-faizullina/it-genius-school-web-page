import * as yup from 'yup';

const regExpEmail = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
const regExpPhone = new RegExp(/^\+?[1-9][0-9]{7,14}$/)

export const schema = yup.object().shape({
    userName: yup.string().trim().required('Поле обязательно для заполнения').min(2, 'Не менее 2-х символов'),
    email: yup.string().trim().required('Поле обязательно для заполнения').matches(regExpEmail, 'Неверный формат почты'),
    phone: yup.string().trim().required('Поле обязательно для заполнения').matches(regExpPhone, 'Неверный формат номера телефона'),
    password: yup.string().trim().required('Поле обязательно для заполнения').min(6, 'Не менее 6 символов')
})

