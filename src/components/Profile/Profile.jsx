import React from 'react'
import '../../style.css'
import profile_img from '../../images/profile_img.png'

function Profile() {
  return (
    <header>
        <img src={profile_img} alt="profile_img" id="profile__img" className='profile_img'/>
        <h2 id="slack">bashy</h2>
        <h3 className='profile-heading'>Annete Black</h3>
    </header>
  )
}

export default Profile