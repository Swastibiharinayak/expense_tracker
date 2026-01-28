import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Welcome from "../pages/Welcome";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ExpenseForm from "../expense/ExpenseForm";
import Dashboard from "../dashboard/Dashboard";
import Dashboard_welcome from "../dashboard/Dashboard_welcome";

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
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/dashboard",
                element: (
                        <Dashboard />  
                ),
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard_welcome />
                    },
                    {
                        path: "/dashboard/tracker",
                        element: <ExpenseForm />
                    }
                ]
            }
        ]
    }
])