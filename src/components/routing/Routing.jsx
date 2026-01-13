import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ExpenseForm from "../ExpenseForm";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Root/>,
        children:[
            {
                path:"/",
                element: <ExpenseForm/>
            }
        ]
    }
])