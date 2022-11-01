import React from 'react'
import githublogo from '../../images/github.png'
import slack from '../../images/slack.png'
import  '../../style.css'

function Collab() {
  return (
    <div className='collab-container'>
      
            <img src={slack} alt="slack" className='slack'/>
            
            <img src={githublogo} alt="githublogo" className='github'/>
      
    </div>
  )
}

export default Collab