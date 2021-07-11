import React, {useState} from 'react';
import {data} from '../../src/data.js';




export const ItemCount = () => {
  let initCart=0
  let [stock, setStock] = useState(data[1].stock); // "data" tiene los productos.
  let [cart, setCart] = useState(initCart); // tiene el contenido del cart en el inicio.
  let [visibilityAdd, setVisibilityAdd] = useState({visibility:'visible'}) //guarda el estado del boton de agregar
  let [visibilitySub, setVisibilitySub] = useState({visibility:'hidden'}) //guarda el estado del boton de quitar
  
  const addOne = () =>{
      if(stock>0){
        
        setCart(cart+=1);
        setStock(stock-=1);
        setVisibilitySub({visibility:'visible'})
        data[1].stock-=1
          
        if(data[1].stock===0)
          {setVisibilityAdd({visibility:'hidden'})}
        
        }}  


  const substractOne = () =>{
      if(cart>0){
        setCart(cart-=1);
        setStock(stock+=1);
        setVisibilityAdd({visibility:'visible'})
        data[1].stock+=1       
        
        if(cart===0)
          {setVisibilitySub({visibility:'hidden'})}
        }}
  
  return (
    <>
      <div>
        <h2>Stock</h2>
        <h1>{stock}</h1>
        <h2>Cantidad pedida</h2>
        <h1>{cart}</h1>
        <button className='btn' style={visibilityAdd} onClick={()=>addOne()}>agregar</button>
        <button className='btn' style={visibilitySub} onClick={()=>substractOne()}>quitar</button>
        <button className='btn' onClick={()=> {return 1}}>Agregar al Carrito</button>


      </div>
    </>

  )


}