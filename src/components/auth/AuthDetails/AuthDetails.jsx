import { useEffect, useState } from 'react'
import classes from './AuthDetails.module.css'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../../firebase'
import Button from '../../Button/Button'

export default function AuthDetails({onChange}) {

    const [authUser, setAuthUser] = useState(null)

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
                <span className={classes.link} onClick={() => onChange('Profile')}>Личный кабинет</span>
                <Button onClick={() => {
                    signOut(auth)
                    setAuthUser(null)
                    onChange('MainSection')
                }}>Выход</Button>
            </div>
            ) 
            : (<Button onClick={() => onChange('SignIn')}>Вход</Button>)}
        </div>
    )
}