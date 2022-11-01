import React from 'react'
import zurilogo from '../../images/Zuri.Internship_Logo.png'
import i4g from '../../images/I4G.png'
import  '../../style.css'
function Patners() {
  return (
    <div className='patner-container'>
       <div>  <img src={zurilogo} alt="zurilogo" className='zurilogo'/> </div>
      <div>  <h3 className='patnertext'>HNG Intership 9 Frontend Task</h3> </div>
       <div>  <img src={i4g} alt="i4g" className='i4g'/></div>
    </div>
  )
}

export default Patners