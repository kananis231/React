import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
      <div id='na'>
        <div className='logo'>
            <h1 id='logo'> <span id='th'>THE</span>NORTHPOLE</h1>
        </div>
        <nav id='nav'>
            <a href id='hom'>Home</a>
            <a href id='hom'>About</a>
            <a href id='hom'>Contect</a>
            <a href id='hom'>Service</a>
      </nav>
      </div>
      <div id='sec'>
        <h1 id='plan'>PLAN YOUR ADVENTURE</h1>
        <button btn id='shop'>Shop Now</button>
        <i class="bi bi-arrow-down-short" id='ic'></i>
    </div>
    </div>
  )
}

export default Navbar