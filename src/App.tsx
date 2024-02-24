import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/auth.context'
import { ToDosProvider } from './contexts/todos.context'
import DefaultLayOut from './layouts/default.layout'
import HomePage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import ToDoDetailPage from './pages/ToDoDetailPage'

const App = () => {
  return (
    <AuthProvider>
      <ToDosProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayOut />}>

              <Route path='/' element={<HomePage />} />
              <Route path='/todos/:toDoId' element={<ToDoDetailPage />} />
              <Route path='/login' element={<LoginPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToDosProvider>
    </AuthProvider>
  )
}

export default App