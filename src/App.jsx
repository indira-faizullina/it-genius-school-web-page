import Header from "./components/Header/Header.jsx"
import MainSection from "./components/MainSection.jsx"
import DirectionsPage from "./components/Pages/DirectionsPage.jsx"
import ProjectsPage from "./components/Pages/ProjectsPage.jsx"
import TeamPage from "./components/Pages/TeamPage.jsx"
import ReviewsPage from "./components/Pages/ReviewsPage.jsx"
import { useState } from "react"

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
       </> 
  )  
}
