import React from 'react'
import Navbar from './components/Navbar'
import './styling/GLobal.scss'
import Mainroutes from './Routes/Mainroutes'

const App = () => {
  return (
    <div> 
       <Navbar />
      <div className='container'>
     
      <Mainroutes />
      </div>
    </div>
    
  )
}

export default App