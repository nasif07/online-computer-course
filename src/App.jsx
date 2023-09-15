
import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home/Home'

function App() {
  const [course , setCourse] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCourse(data));
  },[])

  return (
    <>
      <h1 className='text-center text-4xl font-bold'>Course Registration</h1>
      <Home></Home>

    </>
  )
}

export default App
