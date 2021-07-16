import React , {useState, useEffect} from 'react';



const searchTerm = 'mesa' // esto luego vendra desde un formulario
const targetURL = `https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`


export const GetData = () => {

const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
const [data, setData] = useState([]);

useEffect (()=>{

 
  fetch(targetURL)
   
    .then((response)=>{

      if(response.status >=200 && response.status<=299){
        
            return response.json()
    } else {
            setIsLoading(false);
            setIsError(true);
            throw new Error(response.statusText);
            }
      })
    .then((products) => {
      console.log(products)
      setIsLoading(false)
      setData(products.results)
    })
    .catch((error) => console.log(error));
  
  },[])
  
  
  if(isLoading){
    return (<h1>Loading</h1>)

  }
  if(isError){
    return (<h1>Error</h1>)
  }
  
  return (<>
            <div className='cardContainer'>{data.map((item)=> {
              const {id, title, thumbnail, price} = item // me guardo algunas propiedades que me interesan mostrar
              return <div className='card'key={id}>
                        <div className='cardTitle'>{title}</div>
                        <div className='cardPrice'>Precio: {price}</div>
                        <div className='cardThumbnail'><img className='imgThumb' src={thumbnail}/></div>
                      </div>
                  })}
            </div>
          </>);
}


