import Cont from './Components/Cont'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Daniel from './Components/Daniel'

function App() {

  return (
    <>
      <Routes> 
      <Route path='/' element={<Cont />}/>
      <Route path='/Daniel' element={<Daniel />} />
      </Routes>
    </>
  )
}

export default App
