import Header from "./components/UI/Header/Header.jsx"
import MainSection from "./components/Pages/MainSection/MainSection.jsx"
import DirectionsPage from "./components/Pages/DirectionsPage/DirectionsPage.jsx"
import ProjectsPage from "./components/Pages/ProjectsPage/ProjectsPage.jsx"
import TeamPage from "./components/Pages/TeamPage/TeamPage.jsx"
import ReviewsPage from "./components/Pages/ReviewsPage.jsx"
import { useState } from "react"
import SignUp from "./components/auth/SignUp/SignUp.jsx"
import SignIn from "./components/auth/SignIn/SignIn.jsx"
import Profile from "./components/Pages/Profile/Profile.jsx"

export default function App() {

const [contentType, setContentType] = useState('MainSection')

  return(
       <>
        <Header onChange={(current) => setContentType(current)}/>
        {contentType === 'MainSection' && <MainSection/>}
        {contentType === 'DirectionsPage' && <DirectionsPage/>}
        {contentType === 'ProjectsPage' && <ProjectsPage/>}
        {contentType === 'TeamPage' && <TeamPage/>}
        {contentType === 'ReviewsPage' && <ReviewsPage/>}
        {contentType === 'SignUp' && <SignUp onChange={(current) => setContentType(current)}/>}
        {contentType === 'SignIn' && <SignIn onChange={(current) => setContentType(current)}/>}
        {contentType === 'Profile' && <Profile/>}
       </> 
  )  
}
