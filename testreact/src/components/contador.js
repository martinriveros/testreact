import React, {useState} from 'react';
import {data} from '../../src/data.js';




export const ItemCount = () => {
  let initCart=0
  let [stock, setStock] = useState(data[1].stock); // "data" tiene los productos.
  let [cart, setCart] = useState(initCart); // tiene el contenido del cart en el inicio.
  let [visibilityAdd, setVisibilityAdd] = useState(false) //guarda el estado del boton de agregar
  let [visibilitySub, setVisibilitySub] = useState(true) //guarda el estado del boton de quitar
  
  const addOne = () =>{
      if(stock>0){
        
        setCart(cart+=1);
        setStock(stock-=1);
        setVisibilitySub(false)
        data[1].stock-=1
          
        if(data[1].stock===0)
          {setVisibilityAdd(true)}
        
        }}  


  const substractOne = () =>{
      if(cart>0){
        setCart(cart-=1);
        setStock(stock+=1);
        setVisibilityAdd(false)
        data[1].stock+=1       
        
        if(cart===0)
          {setVisibilitySub(true)}
        }}
  
  return (
    <>
      <div>
        <h2>Stock</h2>
        <h1>{stock}</h1>
        <h2>Cantidad pedida</h2>
        <h1>{cart}</h1>
        <button className='btn' disabled={visibilityAdd} onClick={()=>addOne()}>agregar</button>
        <button className='btn' disabled={visibilitySub} onClick={()=>substractOne()}>quitar</button>
        <button className='btn' onClick={()=> {return 1}}>Agregar al Carrito</button>


      </div>
    </>

  )


}