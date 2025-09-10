import { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function SingUpForm({ choosedDirection, directions}) {

    const [form, setForm] = useState({
        userName: '',
        userPhone: '',
        userChoosedDirection: choosedDirection,
    })

    const [hasModal, setHasModal] = useState(false )

    const handleInputChange = function(event) {
        const {name, value} = event.target
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSelectChange = function(event) {
        setForm(prev => ({
            ...prev,
            userChoosedDirection: event.target.value,
        }))
    }

    const handleSubmit = function(event) {
        event.preventDefault()
        setHasModal(true)
        setTimeout(() => {
            setHasModal(false)
            setForm({
                userName: '',
                userPhone: '',
                userChoosedDirection: choosedDirection,
            })
        }, 3000)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Ваше имя</label>
            <input type="text" id="name" name="userName" value={form.userName} onChange={handleInputChange}/>
            <label htmlFor="tel">Телефон для связи</label>
            <input type="tel" id="tel" name="userPhone" value={form.userPhone} onChange={handleInputChange}/>
            <select defaultValue={choosedDirection} onChange={handleSelectChange}>
                {directions.map((dir, i) => <option key={i} value={dir.title}>{dir.title}</option>)}
            </select>
            <Button>Связаться со мной</Button>
        </form>
        <Modal open={hasModal}>
            <div>
                <h2>Спасибо!</h2>
                <p>Совсем скоро мы свяжемся с вами</p>
                <p>Отправленные данные:</p>
                <p>Имя:{form.userName}</p>
                <p>Телефон:{form.userPhone}</p>
                <p>Направление:{form.userChoosedDirection}</p>
            </div>
        </Modal>
        </>
    )
}