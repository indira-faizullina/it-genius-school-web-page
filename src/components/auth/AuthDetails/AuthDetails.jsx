import { useEffect, useState } from 'react'
import classes from './AuthDetails.module.css'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../../firebase'
import Button from '../../UI/Button/Button'
import { useNavigate } from 'react-router'

export default function AuthDetails() {

    const [authUser, setAuthUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
            return () => listen()
        })
    }, []   
    )

    return(
        <div>
        {authUser ? (
            <div>
                <span className={classes.link} onClick={() => navigate('/profile')}>Личный кабинет</span>
                <Button onClick={() => {
                    signOut(auth)
                    setAuthUser(null)
                    navigate('/')
                }}>Выход</Button>
            </div>
            ) 
            : (<Button onClick={() => navigate('/signin')}>Вход</Button>)}
        </div>
    )
}