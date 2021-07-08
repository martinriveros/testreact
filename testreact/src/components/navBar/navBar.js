import React from 'react'
import logo from './achmed.jpg';
import { CartWidget } from './cartWidget.js';


export function NavBar (){
  return <>
    <div className='logo-container'>
      <img src={logo} alt="" id='logo-nav'></img>
      <CartWidget/>
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
  
};