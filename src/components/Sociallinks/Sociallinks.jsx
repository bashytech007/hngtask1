import React from 'react'
import  '../../style.css'
function Sociallinks() {
  return (
    <div className='container'>
        <a className='twitter' id="twitter" href="https://twitter.com/bashysureboi"><p>  twitter </p></a>
        <a className='zuriteam' id="btn__zuri" href="https://training.zuri.team/"><p>zuriteam</p></a>
        <a className='zuribooks' id="books" href=" http://books.zuri.team" ><p>zuribooks</p> </a>
        <a className='python' id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=<bashy" ><p>python</p></a>
        <a className='background'id="pitch"  href="https://background.zuri.team" ><p>background for coders</p></a>
        <a className='designbooks'id="book__design" href="https://books.zuri.team/design-rules"><p>designbooks</p></a>
    </div>
  )
}

export default Sociallinks