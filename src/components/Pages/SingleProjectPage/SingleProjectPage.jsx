import { useParams, useNavigate } from "react-router"
import Button from "../../UI/Button/Button"

export default function SingleProjectPage() {

const { id } = useParams()
const navigate = useNavigate()

const goBack = () => navigate(-1)

    return(
        <>
            <h3>{id}</h3>
            <Button onClick={goBack}>Назад</Button>
        </>
    )
}