import { Routes, Route } from "react-router";
import MainSection from "../components/Pages/MainSection/MainSection";
import DirectionsPage from "../components/Pages/DirectionsPage/DirectionsPage";
import Profile from "../components/Pages/Profile/Profile";
import ProjectsPage from "../components/Pages/ProjectsPage/ProjectsPage";
import SingleProjectPage from "../components/Pages/SingleProjectPage/SingleProjectPage";
import TeamPage from "../components/Pages/TeamPage/TeamPage";
import ReviewsPage from "../components/Pages/ReviewsPage";
import SignIn from "../components/auth/SignIn/SignIn";
import SignUp from "../components/auth/SignUp/SignUp";
import NoMatchPage from "../components/Pages/NoMatchPage/NoMatchPage";
import CallBackForm from "../components/Pages/CallBackForm";
import Layout from "./Layout";

export default function AppRoutes() {
    return(
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainSection/>} />
                    <Route path='directions' element={<DirectionsPage/>} />
                    <Route path='profile' element={<Profile/>} />
                    <Route path='projects' element={<ProjectsPage/>} />
                    <Route path='projects/:id' element={<SingleProjectPage/>} />
                    <Route path='team' element={<TeamPage/>} />
                    <Route path='reviews' element={<ReviewsPage/>} />
                    <Route path='signin' element={<SignIn/>} />
                    <Route path='signup' element={<SignUp/>} />
                    <Route path='callback' element={<CallBackForm/>} />
                    <Route path='*' element={<NoMatchPage/>} />
                </Route>
            </Routes>
    )
}