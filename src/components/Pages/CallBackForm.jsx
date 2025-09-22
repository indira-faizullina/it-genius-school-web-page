import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal"
import Card from "../UI/Card/Card";
import { useLocation } from "react-router";

export default function CallBackForm() {

    const location = useLocation()

    const {choosedDirection, directions} = location.state || {}

    const [form, setForm] = useState({
        userName: '',
        userPhone: '',
        userChoosedDirection: '',
    })

    const [isDataReady, setIsDataReady] = useState(false)
    const [hasModal, setHasModal] = useState(false)

    useEffect(() => {
        if(choosedDirection && directions) {
            setForm((prev) => ({
            ...prev, 
            userChoosedDirection: { choosedDirection } 
        }))
        setIsDataReady(true)
        }
            console.log('choosedDirection', choosedDirection)
    console.log('directions', directions)
    }, [choosedDirection, directions])

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
    }

    const handleCloseModal = function() {
        setForm({
            userName: '',
            userPhone: '',
            userChoosedDirection: choosedDirection,
        })
        setHasModal(false)
    }

    if(!isDataReady) {
        return(
            <p>Загрузка данных...</p>
        )
    }
    return (
        <>
        <Card>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Ваше имя</label>
            <input type="text" id="name" name="userName" value={form.userName} onChange={handleInputChange}/>
            <label htmlFor="tel">Телефон для связи</label>
            <input type="tel" id="tel" name="userPhone" value={form.userPhone} onChange={handleInputChange}/>
            <select defaultValue={choosedDirection} onChange={handleSelectChange}>
                {directions.directions.map((dir, i) => <option key={i} value={dir.title}>{dir.title}</option>)}
            </select>
            <Button>Связаться со мной</Button>
        </form>
        </Card>
        <Modal open={hasModal}>
                <h2>Спасибо!</h2>
                <p>Совсем скоро мы свяжемся с вами</p>
                <p>Отправленные данные:</p>
                <p>Имя:{form.userName}</p>
                <p>Телефон:{form.userPhone}</p>
                <p>Направление:{form.userChoosedDirection}</p>
                <Button onClick={handleCloseModal}>Закрыть</Button>
        </Modal>
        </>
    )
}