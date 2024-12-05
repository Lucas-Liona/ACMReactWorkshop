import { createBrowserRouter } from "react-router"
import App from "../App"
import Home from "../pages/HomePage/home"
import About from "../pages/AboutPage/about"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <Home />},
            {path: "/about", element: <About />}
        ]
    }
])