BrowserRouter
import { BrowserRouter } from "react-router"
import AppRoutes from "./routes/AppRoutes.jsx"

export default function App() {

  return(
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
  )  
}
