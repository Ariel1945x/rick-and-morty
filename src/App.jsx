import './App.css'
import Location from './components/Location'
import Loader from './components/Loader'
import { useState } from 'react'

function App() {

  const [loading, isLoading] = useState(true)

  setTimeout(() => {
    isLoading(!true)
  }, 3000)

  return (
    <>
    {loading && <Loader/>}
    <Location/>
    </>
  )
}

export default App
