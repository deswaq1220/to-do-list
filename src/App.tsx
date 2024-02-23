import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToDosProvider } from './contexts/todos.context'
import HomePage from './pages/Homepage'
import ToDoDetailPage from './pages/ToDoDetailPage'

const App = () => {
  return (
    <ToDosProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/todos/:toDoId' element={<ToDoDetailPage />} />
        </Routes>
      </BrowserRouter>
    </ToDosProvider>
  )
}

export default App