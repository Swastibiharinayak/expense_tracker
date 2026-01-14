import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ExpenseForm from "../expense/ExpenseForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Welcome />
            },
            {
                path: "/home",
                element: <Home/> ,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/tracker",
                element: <ExpenseForm/>
            }
        ]
    }
])