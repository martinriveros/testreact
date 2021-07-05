import React from 'react'
import logo from './cart.jpg';


function NavBar (){
  return <>
    <div className='logo-container'>
      <img src={logo} alt="" id='logo-nav'></img>
    </div>
    <div className='nav-container'>
      <ul className="nav-list">
        <li className="item-menu"><a href="#">Nosotros</a></li>
        <li className="item-menu"><a href="#">Contacto</a></li>
        <li className="item-menu"><a href="#">HOT</a></li>
        <li className="item-menu"><a href="#">Productos</a></li>
       </ul>
    </div>
  </>
  
}
export default NavBar;