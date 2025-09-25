import { Outlet } from "react-router";
import Header from "../components/UI/Header/Header";
import Footer from "../components/UI/Footer/Footer";

export default function Layout() {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}