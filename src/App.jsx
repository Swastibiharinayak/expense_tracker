import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/routing/Routing'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
