import React from 'react'

const PeticionApi = () => {
  const [personajes, setPersonajes] = React.useState([])
  //const [paginacion, setPagigancion] = React.useState(1)

  const traerPersonajes = async() =>{
    try{
      const res = await fetch("https://rickandmortyapi.com/api/character")
      const {results} = await res.json()
      setPersonajes(results)
      console.log(results)
    }catch(error){
      console.log(error)
    }
    
  }

  return (
    <div>
    <h1>PETICION A API</h1>
    <button onClick={traerPersonajes}>Traer personaje</button>
    <button>Siguente</button>
    <button>Atras</button> 
    
    {
      personajes.map(({id, status, name, species, image }) => (
        <div>
          <h4>{id} - {status} - {name} - {species}</h4>
          <img scr={image} alt={name}/>
        </div>
      ))
    }
        
    </div>   
  )
}

export default PeticionApi
