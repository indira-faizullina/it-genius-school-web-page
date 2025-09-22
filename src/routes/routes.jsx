import { Routes } from "react-router";
import MainSection from "../components/Pages/MainSection/MainSection";
import DirectionsPage from "../components/Pages/DirectionsPage/DirectionsPage";
import Profile from "../components/Pages/Profile/Profile";
import ProjectsPage from "../components/Pages/ProjectsPage/ProjectsPage";
import TeamPage from "../components/Pages/TeamPage/TeamPage";
import ReviewsPage from "../components/Pages/ReviewsPage";
import SignIn from "../components/auth/SignIn/SignIn";
import SignUp from "../components/auth/SignUp/SignUp";
import NoMatchPage from "../components/Pages/NoMatchPage/NoMatchPage";
import CallBackForm from "../components/Pages/CallBackForm";
import { Route } from "react-router";

export default function AppRoutes() {

    const navigationRoutes = [
        {path: '/', element: <MainSection/>},
        {path: '/directions', element: <DirectionsPage/>},
        {path: '/profile', element: <Profile/>},
        {path: '/projects', element: <ProjectsPage/>},
        {path: '/team', element: <TeamPage/>},
        {path: '/reviews', element: <ReviewsPage/>},
        {path: '/signin', element: <SignIn/>},
        {path: '/signup', element: <SignUp/>},
        {path: '/callback', element: <CallBackForm/>},
        {path: '*', element: <NoMatchPage/>},
    ]

    return(
        <Routes>{navigationRoutes.map((route) => (<Route key={route.path} path={route.path} element={route.element}></Route>))}</Routes>
    )
}