import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/routing/Routing'

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
